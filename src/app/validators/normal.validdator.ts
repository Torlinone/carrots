import {FormControl} from "@angular/forms";
/**
 * Created by Keriy on 2017/5/26.
 */
export function emailValidator(control: FormControl): any {
  const EMAIL = /^\+?[a-z0-9](([-+.]|[_]+)?[a-z0-9]+)*@([a-z0-9]+(\.|\-))+[a-z]{2,6}$/;
  let valid: boolean = EMAIL.test(control.value);

  return valid ? null : {email: {descemail: '邮箱格式不正确'}};
}

/**
 * 密码校验
 */
export function passwordValidator(control: FormControl): any {
  const PASSWORDD = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
  let valid = PASSWORDD.test(control.value);
  console.log(valid);
  return valid ? null : {password: {descpassword: '密码不能包含特殊字符'}}
}
