import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPage } from "@/lib/getPage";
import PageRenderer from "@/components/PageRenderer";

export default function Page({ slug: fixedSlug }: { slug?: string }) {
  const params = useParams();
  const slug = fixedSlug || params.slug || "home";
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    getPage(slug).then(setPage);
  }, [slug]);

  if (!page) return <div>Loading...</div>;

  return <PageRenderer sections={page.sections} />;
}
