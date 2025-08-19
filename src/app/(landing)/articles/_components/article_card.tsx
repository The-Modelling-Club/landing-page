"use client";
import { ArticlesResponse } from "@/types/articles.interface";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }: Readonly<ArticlesResponse>) {
  return (
    <Link
      href={`/articles/${article.id}`}
      className=" grid group border sm:grid-cols-[40%_auto]"
    >
      <section className=" max-h-[20rem] overflow-hidden">
        <Image
          src={article.image_url}
          width={2000}
          height={2000}
          alt={article.id}
          className=" group-hover:scale-105 transition-all duration-500 scale-125 w-full h-full object-cover object-center"
        />
      </section>
      <section className="p-4">
        <h4 className=" group-hover:underline font-heading font-semibold mb-3 text-xl">
          {article.title}
        </h4>
        <p className=" line-clamp-3 text-pretty">{article.description}</p>
        <p className="  mt-3 text-primary text-sm">Read More...</p>
      </section>
    </Link>
  );
}
