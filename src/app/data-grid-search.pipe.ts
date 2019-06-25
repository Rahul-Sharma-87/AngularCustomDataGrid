import { Pipe, PipeTransform } from '@angular/core';
import { Column } from './data-grid/data-grid.component';

@Pipe({
  name: 'dgSearch'
})
export class DataGridSearchPipe implements PipeTransform {
  transform(value: Array<Object>,columns: Array<Column>, searchText): any {
    var searchValue = new RegExp(searchText,'gi');
    if(searchText) {
      let arr: Array<Object>;
      //Search in each column
      columns.forEach(column => {
        if(column.issearchable)
        if(arr) {
          arr = arr.concat(value.filter(x => x[column.origProperty].search(searchValue) > -1));
        } else {
          arr = value.filter(x => x[column.origProperty].search(searchValue) > -1);
        }
      });
      return arr;
    } else
    return value;
  }
}
