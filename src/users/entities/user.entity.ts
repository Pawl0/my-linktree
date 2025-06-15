import { Link } from 'src/admin/links/entities/link.entity';

export class User {
  id: number;
  name: string;
  email: string;
  links?: Link[];
}
