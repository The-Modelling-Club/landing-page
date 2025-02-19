import ImageOne from "@/app/assets/images/bio energy.jpg";
import ImageTwo from "@/app/assets/images/jro_rich.jpg";
import ImageThree from "@/app/assets/images/maspolic_one.jpg";
import ImageFour from "@/app/assets/images/yaw_one.jpg";

type Programme = "petrochemical" | "chemical";

type PortfolioEntry = {
  portfolio: string;
  name: string;
  programme: Programme;
  image: any;
};

type YearlyData = {
  [year: string]: PortfolioEntry[];
};

export const EXECUTIVES: YearlyData = {
  "2023": [
    {
      portfolio: "president",
      name: "Martin Akpaloo",
      programme: "chemical",
      image: ImageOne,
    },
    {
      portfolio: "vice president",
      name: "Araana",
      programme: "chemical",
      image: ImageOne,
    },
  ],
  "2024": [
    {
      portfolio: "president",
      name: "Joshua Owusu Richardson",
      programme: "chemical",
      image: ImageTwo,
    },
    {
      portfolio: "vice president",
      name: "King-Quaye",
      programme: "petrochemical",
      image: ImageOne,
    },
    {
      portfolio: "training and education head",
      name: "Diabene Yaw Addo",
      programme: "chemical",
      image: ImageFour,
    },
    {
      portfolio: "projects coordinator",
      name: "Arkoh Duodu Caleb",
      programme: "chemical",
      image: ImageOne,
    },
    {
      portfolio: "technical and app dev. head",
      name: "Maspolic Amo",
      programme: "petrochemical",
      image: ImageThree,
    },

    {
      portfolio: "PRO",
      name: "Okoh Felix Randy",
      programme: "chemical",
      image: ImageOne,
    },
  ],
  "2025": [
    {
      portfolio: "president",
      name: "Elvis Wetea Aosige",
      programme: "petrochemical",
      image: ImageOne,
    },
    {
      portfolio: "vice president",
      name: "Isaac Antwi",
      programme: "chemical",
      image: ImageOne,
    },
    {
      portfolio: "projects coordinator",
      name: "Perfect Mawuli Keti",
      programme: "petrochemical",
      image: ImageOne,
    },
    {
      portfolio: "technical and app dev. head",
      name: "Edward Amaadi Kwame",
      programme: "petrochemical",
      image: ImageOne,
    },
    {
      portfolio: "training and education head",
      name: "Chrysler Steve Corquaye",
      programme: "petrochemical",
      image: ImageOne,
    },
    {
      portfolio: "general secretary",
      name: "Akubah Amihere Agyabu",
      programme: "chemical",
      image: ImageOne,
    },
    {
      portfolio: "PRO",
      name: "Victoria Nana Ama Gotah",
      programme: "chemical",
      image: ImageOne,
    },
    {
      portfolio: "financial secretary",
      name: "Ken Cobinah Dadze",
      programme: "petrochemical",
      image: ImageOne,
    },
  ],
};
