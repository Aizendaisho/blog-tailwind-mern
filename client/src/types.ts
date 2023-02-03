export type PostsType = {
  _id: string;
  photo?: string;
  title: string;
  desc: string;
  username: string;
  categories: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export interface Categories {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
