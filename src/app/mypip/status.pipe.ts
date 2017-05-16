/**
 * Created by Keriy on 2017/6/7.
 * /*
 * 格式化status，没有其他用处
 * */
 import { Pipe, PipeTransform} from '@angular/core';

 @Pipe({
   name: 'statusPip'
 })
export class StatusPipe implements PipeTransform {
   transform(code: number): string {
     switch (code) {
       case 1 : return '草稿';
       case 2 : return '上线';
       default : return '未知';
     }
   }
 }
