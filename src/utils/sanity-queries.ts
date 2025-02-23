import { groq } from "next-sanity";

export const findAllArticles = groq` 
    *[_type == "articles"] {
    "id": _id,
    "slug": slug.current,
    description,
    title,
    "image_url": image_url.asset -> url,
    }
`;

export const findOneArticle = groq` 
    *[_type == "articles" && slug.current == $slug][0] {
    "id": _id,
    authors[]->{
        "id": _id,
        author_name
    },
    "slug": slug.current,
    content,
    description,
    title,
    "image_url": image_url.asset -> url,
    }
`;

export const findExecutives = groq`
  *[_type == 'executives' && academic_year == $activeYear][0] {
  portfolio_entries[]->{
    "id": _id,
    name,
    "image":image.asset->url ,
    programme,
    portfolio
  }
}
`;
