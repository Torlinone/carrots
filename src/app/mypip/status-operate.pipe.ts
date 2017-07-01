/**
 * Created by Keriy on 2017/6/7.
 * /*
 * 格式化status，没有其他用处
 * */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusOperate'
})
export class StatusOperatePipe implements PipeTransform {

  transform(code: number): string {
    switch (code) {
      case 2 : return '上线';
      case 1 : return '下线';
      default : return '全部';
    }
  }
}
