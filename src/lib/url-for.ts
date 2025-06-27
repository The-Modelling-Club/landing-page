import { client } from "@/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => builder.image(source);

export { urlFor };
