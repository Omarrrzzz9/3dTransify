import Hero from "./Hero";

export default function PageRenderer({ sections }: { sections: any[] }) {
  return sections.map((section, i) => {
    switch (section._type) {
      case "hero":
        return <Hero key={i} {...section} />;
      default:
        return null;
    }
  });
}
