/**
 * Created by Keriy on 2017/5/30.
 * not used now
 */
import { CurrentUser } from '../model/user-model'
export function checkLogin() {

  let currentUser: CurrentUser;
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  this.notLogined = !this.currentUser.data.manager.status;

  if(this.notLogined) {
    this.router.navigate(['/login']);
  }
}
