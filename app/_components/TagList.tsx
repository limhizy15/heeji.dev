import { HStack, Tag } from "@chakra-ui/react";

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <section className="flex flex-wrap md:w-176 gap-2 p-8">
      {tags.map((tag) => (
        <Tag key={tag}>#{tag}</Tag>
      ))}
    </section>
  );
}
