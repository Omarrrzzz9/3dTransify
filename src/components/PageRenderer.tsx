
export default function PageRenderer({ sections }: { sections: any[] }) {
  return sections.map((section, i) => {
    switch (section._type) {
      default:
        return null;
    }
  });
}
