import { Pipe, PipeTransform } from '@angular/core';
import { SortDirection, Sorting } from './data-grid/data-grid.component';

@Pipe({
  name: 'dgsort',
  pure: false
})
export class DataGridSortPipe implements PipeTransform {

  transform(value: Array<Object>, sorting:Sorting): any {
    if(value && sorting) {
      let key:string = sorting.sortKey;
      let sortDirection:SortDirection = sorting.sortDirection;
      if(sortDirection as SortDirection === SortDirection.Desc) {
         return value.sort((a,b)=>a[key] > b[key] ? -1 : 1);
      } else {
        return value.sort((a,b)=>a[key] < b[key] ? -1 : 1);
      }
    }
    return value;
  }

}
