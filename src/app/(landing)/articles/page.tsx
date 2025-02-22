import ArticleCard from "./_components/article_card";
import { client } from "@/client";
import { ArticleInterface } from "@/types/articles.interface";
import { findAllArticles } from "@/utils/sanity-queries";

export default async function ArticlesPage() {
  const data: ArticleInterface[] = await client.fetch(findAllArticles);

  if (!data) {
    return <div>Error</div>;
  }

  return (
    <div className=" p-6 md:p-12">
      <div className=" py-6">
        <h2 className=" text-4xl lg:text-6xl font-semibold mb-3">Articles</h2>
        <p className=" max-w-screen-md ">
          Here, we break down the latest and greatest breakthrough in
          Engineering. Whether you're curious about how we make clean energy,
          clean water, or even design better processes, these articles have got
          you covered. Let's dive in together!
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
