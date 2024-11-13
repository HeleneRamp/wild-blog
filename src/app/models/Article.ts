export interface Article {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  image: string;
  likeCount: number;
  isPublished: boolean;
  categoryName: string;
  isFavorite: boolean;
  comment: string;
}
