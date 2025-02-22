import { client } from "@/client";
import BackButton from "@/components/back-button";
import { RichText } from "@/components/text-editor";
import { urlFor } from "@/lib/url-for";
import { ArticleInterface } from "@/types/articles.interface";
import { AuthorInterface } from "@/types/authors.interface";
import { findAllArticles, findOneArticle } from "@/utils/sanity-queries";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const articles: ArticleInterface[] = await client.fetch(findAllArticles);
  const slugRoutes = articles.map((article: ArticleInterface) => article.slug);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const { slug } = await params;
  const data: ArticleInterface = await client.fetch(findOneArticle, {
    slug,
  });

  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      images: [
        {
          url: data?.image_url,
          alt: `${data?.title}'s image`,
        },
      ],
    },
  };
}

export default async function page({ params }: Readonly<Props>) {
  const { slug } = await params;
  const data: ArticleInterface = await client.fetch(findOneArticle, {
    slug,
  });

  const authors = data.authors.map(
    (author: AuthorInterface) => author.author_name
  );

  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center p-4 md:w-[55dvw]">
      <div className="my-8">
        <div className="mt-6">
          <BackButton />
        </div>
        <p className="py-4 text-3xl font-semibold leading-[1.6] text-neutral-700 md:text-5xl md:leading-[4rem] lg:text-center">
          {data.title}
        </p>
        <div className="my-5 flex flex-row items-center gap-2 md:gap-x-4 lg:justify-center">
          <section className="flex flex-col items-start justify-center lg:flex-row lg:items-center">
            <p className="flex items-center justify-center">
              <span className="font-normal">
                {authors
                  ? `Authored by: ${authors.join(", ")}`
                  : "Unknown Author"}
              </span>
            </p>
            <span className="hidden px-2 text-lg text-gray-500 md:block">
              &#x2022;
            </span>
          </section>
        </div>
        <div className="my-14 w-full md:h-[20rem]">
          <Image
            src={urlFor(data.image_url).url()}
            alt={data.title}
            width={2000}
            height={2000}
            className="h-full w-full rounded-lg object-cover object-bottom shadow-md"
          />
        </div>
        <PortableText value={data.content} components={RichText} />
      </div>
    </section>
  );
}
