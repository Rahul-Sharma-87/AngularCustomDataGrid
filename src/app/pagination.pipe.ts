import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(value: Array<Object>, startIndex: number, endIndex:number): any {
    return value.slice(startIndex,endIndex+1);
  }
}
