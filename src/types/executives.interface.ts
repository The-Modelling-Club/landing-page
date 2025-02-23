import { StaticImageData } from "next/image";

type Programme = "petrochemical" | "chemical";

export interface PortfolioEntry {
  portfolio: string;
  name: string;
  programme: Programme;
  image: StaticImageData;
}

export interface ExecutivesInterface {
  portfolio_entries: PortfolioEntry[];
}
