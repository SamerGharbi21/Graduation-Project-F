import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters'
})
export class LimitCharactersPipe implements PipeTransform {
  transform(value: string, limit: number, placeholder: string = '...'): string {
    if (value.length > limit) {
      return value.substring(0, limit) + placeholder;
    } else {
      return value;
    }
  }
}
