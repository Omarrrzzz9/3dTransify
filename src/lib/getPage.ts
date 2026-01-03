import { sanity } from "./sanity";

export async function getPage(slug: string) {
  return sanity.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  );
}
