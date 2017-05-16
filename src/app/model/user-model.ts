/**
 * Created by Keriy on 2017/5/19.
 */
export class User {
  id: number;
  name: string;
  password: string;
}

export class CurrentUser {
  code: number;
  data: {
    manager: {
      createAt: number;
      createBy: string;
      id: number;
      name: string;
      nick: string;
      status: string;
      updateAt: number;
      updateBy: number;
    };
    result: string;
    role: {
      createAt: number;
      createBy: string;
      id: number;
      name: string;
      nick: string;
      status: string;
      updateAt: number;
      updateBy: number;
    };
    size: string;
    total: string;
  };
  message: string;
}
