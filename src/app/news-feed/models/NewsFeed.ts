import {BaseEntity} from '../../shared/models/BaseEntity';
import {User} from '../../user/model/user';

export class NewsFeed extends BaseEntity {
  title: string;
  description: string;
  imageUrl: string;
  user: User;
}
