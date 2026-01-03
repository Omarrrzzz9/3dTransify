import Hero from "./Hero";
import TextBlock from "./TextBlock";

export default function PageRenderer({ sections }: { sections: any[] }) {
  return sections.map((section, i) => {
    switch (section._type) {
      case "hero":
        return <Hero key={i} {...section} />;
      case "textBlock":
        return <TextBlock key={i} {...section} />;
      default:
        return null;
    }
  });
}
