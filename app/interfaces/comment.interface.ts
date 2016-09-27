export interface IComment {
  id: number,
  text: string,
  articleId: number,
  creationUser: number,
  creationTimestamp: Date
}
