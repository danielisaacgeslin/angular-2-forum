export interface IArticle {
  id: number;
  title: string;
  description: string;
  body: string;
  creationTimestamp: Date;
  editionTimestamp: Date;
  creationUser: string;
  editionUser: number;
}
