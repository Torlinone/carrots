import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(code: number): string {
    switch (code) {
      case 0 : return '首页banner';
      case 1 : return '找职位banner';
      case 2 : return '找精英banner';
      case 3 : return '行业大图';
      default : return '全部';
    }
  }

}
