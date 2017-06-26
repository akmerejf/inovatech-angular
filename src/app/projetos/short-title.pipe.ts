import { Pipe, PipeTransform } from '@angular/core';
const MAX_LENGTH = 10;

@Pipe({
  name: 'shortTitle'
})
export class ShortTitlePipe implements PipeTransform {

  transform(title: string, length: number) {
    length = this._calculateLength(length);

    if (this._inputExceedsLimit(title, length)) {
      return this._truncate(title, length);
    } else {
      return title;
    }
  }

  _inputExceedsLimit(input, length) {
    return input.length > length;
  }

  _truncate(input, length) {
    return input.substring(0, length) + '...';
  }

  _calculateLength(length) {
    return length || MAX_LENGTH;
  }

}
