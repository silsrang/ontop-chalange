import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableStatusStyle',
})
export class TableSatusPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let d = value;

    if (d === 'Active') {
      d = 'active';
    } else if (d === 'Signature pending') {
      d = 'pending';
    } else {
      d = ' ';
    }

    return d;
  }
}
