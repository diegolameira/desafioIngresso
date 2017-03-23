import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(items: any[], args: any): any {
    return !items || items.length === 0 || args === '' ? items : items.filter(item => item.genres.indexOf(args) !== -1);
  }

}
