import { TypedObject } from "sanity";
import { AuthorInterface } from "./authors.interface";

export interface ArticleInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: TypedObject;
  authors: AuthorInterface[];
  image_url: string;
  manuscriptUrl: string;
  is_downloadable: boolean;
}

export interface ArticlesResponse {
  article: ArticleInterface;
}
