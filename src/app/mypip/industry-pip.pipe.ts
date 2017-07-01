/*
* 格式化行业类别，没有其他用处
* */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'industryPip'
})
export class IndustryPipe implements PipeTransform {

  transform(code: number): string {
    switch (code) {
      case 0 : return "移动互联网";
      case 1 : return "电子商务";
      case 2 : return "企业服务";
      case 3 : return "O2O";
      case 4 : return "教育";
      case 5 : return "游戏";
      case 6 : return "金融";
      default : return "其他行业";
    }
  }
}
