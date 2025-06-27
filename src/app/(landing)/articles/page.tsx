import ArticleCard from "./_components/article_card";
import { client } from "@/client";
import { ArticleInterface } from "@/types/articles.interface";
import { findAllArticles } from "@/utils/sanity-queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | The Modeling Club - KNUST",
  description:
    "Explore the latest breakthroughs in engineering through our articles. Learn about green hydrogen, CFD, oil and gas technologies, water treatment, and bioenergy from our expert contributors.",
  keywords: "engineering articles, green hydrogen, CFD, oil and gas, water treatment, bioenergy, chemical engineering, process engineering",
  openGraph: {
    title: "Articles | The Modeling Club - KNUST",
    description: "Latest engineering insights and breakthroughs from The Modeling Club",
    url: "https://themodelingclub.com/articles",
    type: "website",
    images: [
      {
        url: "/articles-og.jpg",
        width: 1200,
        height: 630,
        alt: "Engineering Articles - The Modeling Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | The Modeling Club - KNUST",
    description: "Latest engineering insights and breakthroughs from The Modeling Club",
    images: ["/articles-og.jpg"],
  },
  alternates: {
    canonical: "/articles",
  },
};

export default async function ArticlesPage() {
  const data: ArticleInterface[] = await client.fetch(findAllArticles);

  if (!data) {
    return <div>Error</div>;
  }

  return (
    <div className=" p-6 md:p-12">
      <div className=" max-w-screen-md text-center mx-auto py-6">
        <h2 className=" text-4xl lg:text-6xl font-semibold mb-3">Articles</h2>
        <p className=" max-w-screen-md ">
          Here, we break down the latest and greatest breakthrough in Engineering. Whether you're curious about how we make clean energy, clean water, or even
          design better processes, these articles have got you covered. Let's dive in together!
        </p>
      </div>
      <main className=" grid md:grid-cols-2 mt-6 gap-6">
        {data.map((article: ArticleInterface) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </main>
    </div>
  );
}
