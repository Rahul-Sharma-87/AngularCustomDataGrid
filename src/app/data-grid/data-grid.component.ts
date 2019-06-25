import { Component, EventEmitter, OnInit } from '@angular/core';
import { PagerService } from '../pager.service';

export class Column{
  public sequence:number;
  public origProperty:string;
  public displayText:string;
  public issortable:boolean;
  public issearchable: boolean;
  public sortDirection:SortDirection;

  constructor(sequence:number,origProperty:string,text:string,issortable:boolean,issearchable:boolean ) {
    this.sequence = sequence;
    this.origProperty = origProperty;
    this.displayText = text;
    this.issortable = issortable;
    this.issearchable = issearchable;
  }
}

export enum SortDirection {
  Asc = 0,
  Desc = 1
}

export class Sorting{
  public sortKey:string;
  public sortDirection:SortDirection;

  constructor(sortKey:string, sortDirection:SortDirection ) {
    this.sortKey = sortKey;
    this.sortDirection = sortDirection;
  }
}

@Component({ 
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  inputs:["columns","values","sorting","pageSize"],
  outputs:["deleteRowEvent","updateRowEvent"]
})
export class DataGridComponent implements OnInit {

  //Inputs values bound to grid
  values:Array<Object>;
    
  //Option for user to set default sorted column
  sorting: Sorting;

  pager:any = {}

  constructor(private paginationService:PagerService) { 
  }

  ngOnInit(): void {
    this.setPage(1);
  }

  setPage(pageNumber:number) {
    this.pager = this.paginationService.getPager(this.values.length, pageNumber, 2);
    console.log(this.pager);
  }

  deleteRowEvent = new EventEmitter();
  //makes local view changes and propogates delete row event
  onDeleteRow(deleteIndex,value)  {
    this.values.splice(deleteIndex,1);
    this.deleteRowEvent.emit(value);
  }

  //Propagates update row event
  updateRowEvent = new EventEmitter();
  onUpdateRow(value) {
    this.updateRowEvent.emit(value);
  }

  onSortClick(column:Column)  {
    if(this.sorting) {
            //Sorting column name
      this.sorting.sortKey = column.origProperty;
      //toggle sort direcion
      if(column.sortDirection as SortDirection === SortDirection.Asc) {
        this.sorting.sortDirection = column.sortDirection = SortDirection.Desc;
      } else{
        this.sorting.sortDirection = column.sortDirection = SortDirection.Asc;
      }
    } else {
      //Initialize in-case no default sort is selected
      this.sorting = new Sorting(column.origProperty, SortDirection.Asc)
      column.sortDirection = SortDirection.Asc;
    }
  }
 
}
