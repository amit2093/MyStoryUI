import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstWordOfName'
})
export class GetFirstWordOfNamePipe implements PipeTransform {

  transform(value: string, args: any[]): string | boolean
  {
      if (value == null) {
        return value;
      }
      const words = value.split(' ');
      return words.length > 0 ? words[0] : value;
  }
}