import {BaseEntity} from '../../shared/models/BaseEntity';

export class User extends BaseEntity {
  name: string;

  email: string;

  password: string;
}

export class LoginViewModel {
  email: string;
  password: string;
}
