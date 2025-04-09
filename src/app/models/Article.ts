export interface Author {
  id: number;
  firstname: string;
  lastname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  updateAt: string;
  categoryName: string;
  imageUrls: string[];
  authorDTOs: Author[];
  paragrOne: string;
  paragrTwo?: string;
  paragrThree?: string;
  likeCount: number;
  favorite: boolean;
}
