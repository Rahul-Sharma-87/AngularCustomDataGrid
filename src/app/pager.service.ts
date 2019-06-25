import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {
  getPager(totalItems:number, currentPage:number = 1, pageSize:number = 10)  {
    let totalPages = Math.ceil(totalItems/pageSize);
    //Ensure current page range 
    if(currentPage < 1) {
      currentPage = 1;
    } else if(currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage:number, endPage:number;
    //if total pages are less then 10 then show all
    if(totalPages <= 10)  {
      startPage = 1;
      endPage = totalPages;
    } else {
      //Current page is less then 6 then show 1 to 10
      if(currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } 
      //current page is towards last four
      //show last 9
      //eg total 15 for 13 show start 13 -9 = 4  and end 15  
      else if(currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        //Make last 5 visible and next four
        //eg total 15 for 7 show start 2  and end 11 
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    //
    let startIndex = (currentPage - 1)* pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    //Create pages array
    let Pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i=> startPage + i);

    return {
      totalPages:totalPages,
      currentPage:currentPage,
      pageSize:pageSize,
      startPage:startPage,
      endPage:endPage,
      pages:Pages,
      startIndex:startIndex,
      endIndex:endIndex
    }
  }
}
