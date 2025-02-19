import { attachTimeline } from "framer-motion";
import ArticleCard from "./_components/article_card";

export type ArticlePost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  authors: string[];
  image_url: string;
};

const articles: ArticlePost[] = [
  {
    id: "1",
    slug: "introduction-to-green-hydrogen",
    title: "Introduction to Green Hydrogen: The Future of Clean Energy",
    description: "Discover how green hydrogen is revolutionizing the energy sector and its potential to replace fossil fuels.",
    content:
      "Green hydrogen, produced through the electrolysis of water using renewable energy sources, is emerging as a key player in the global transition to clean energy. Unlike grey or blue hydrogen, green hydrogen has zero carbon emissions, making it an environmentally friendly alternative. This article explores the production process, applications, and challenges of green hydrogen.",
    authors: ["Dr. Emily Carter", "John Doe"],
    image_url: "https://ik.imagekit.io/i7gyrkpch/green_hydrogen.jpeg?updatedAt=1738408243958",
  },
  {
    id: "2",
    slug: "computational-fluid-dynamics-basics",
    title: "Understanding Computational Fluid Dynamics (CFD): A Beginner's Guide",
    description: "Learn the basics of CFD and how it is used to simulate fluid flow in various industries.",
    content:
      "Computational Fluid Dynamics (CFD) is a branch of fluid mechanics that uses numerical methods and algorithms to solve and analyze problems involving fluid flows. From aerodynamics in aerospace to optimizing pipelines in the oil and gas industry, CFD plays a crucial role. This article provides an overview of CFD principles, applications, and software tools.",
    authors: ["Dr. Michael Zhang"],
    image_url: "https://ik.imagekit.io/i7gyrkpch/cfd.png?updatedAt=1738408243660",
  },
  {
    id: "3",
    slug: "oil-and-gas-exploration-technologies",
    title: "Innovative Technologies in Oil and Gas Exploration",
    description: "Explore the latest technologies transforming oil and gas exploration and production.",
    content:
      "The oil and gas industry is leveraging advanced technologies like seismic imaging, AI, and robotics to enhance exploration and production efficiency. These innovations are helping to locate reserves more accurately, reduce environmental impact, and improve safety. This article highlights key technologies and their impact on the industry.",
    authors: ["Dr. Laura Evans", "James Smith"],
    image_url: "https://ik.imagekit.io/i7gyrkpch/oilandgas.jpg?updatedAt=1738408244019",
  },
  {
    id: "4",
    slug: "advancements-in-water-treatment",
    title: "Advancements in Water Treatment: Sustainable Solutions for Clean Water",
    description: "Discover the latest advancements in water treatment technologies and their role in ensuring clean water access.",
    content:
      "Water treatment technologies have evolved significantly, with innovations like membrane filtration, UV disinfection, and advanced oxidation processes leading the way. These methods are crucial for addressing water scarcity and pollution. This article discusses the latest trends and their applications in industrial and municipal water treatment.",
    authors: ["Dr. Rachel Green"],
    image_url: "https://ik.imagekit.io/i7gyrkpch/water.jpg?updatedAt=1738408243276",
  },
  {
    id: "5",
    slug: "bioenergy-renewable-energy-source",
    title: "Bioenergy: A Sustainable Renewable Energy Source",
    description: "Learn how bioenergy is produced and its role in the global renewable energy mix.",
    content:
      "Bioenergy, derived from organic materials like biomass, is a versatile and sustainable energy source. It can be used for electricity generation, heating, and transportation fuels. This article explores the types of bioenergy, production methods, and their environmental benefits and challenges.",
    authors: ["Dr. Mark Johnson"],
    image_url: "https://ik.imagekit.io/i7gyrkpch/bio%20energy.jpg?updatedAt=1738408243676",
  },
];

export default function ArticlesPage() {
  return (
    <div className=" p-6 md:p-12">
      <div className=" py-6">
        <h2 className=" text-4xl lg:text-6xl font-semibold mb-3">Articles</h2>
        <p className=" max-w-screen-md ">
          Here, we break down the latest and greatest breakthrough in Engineering. Whether you're curious about how we make clean energy, clean water, or even
          design better processes, these articles have got you covered. Let's dive in together!
        </p>
      </div>
      <main className=" grid md:grid-cols-2 mt-6 gap-6">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </main>
    </div>
  );
}
