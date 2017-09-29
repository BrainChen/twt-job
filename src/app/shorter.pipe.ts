import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorter'
})
export class ShorterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (value.length > 28) {
        return value.slice(0, 28) + '...';
      } else {
        return value;
      }
  }

}
