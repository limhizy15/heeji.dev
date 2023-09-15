import { Badge, Button, HStack, Stack, Tag } from "@chakra-ui/react";

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <Stack
      flexDirection={"row"}
      paddingInline={4}
      paddingBlock={8}
      flexWrap={"wrap"}
    >
      {tags.map((tag) => (
        <Button key={tag} padding={2}>
          #{tag}
        </Button>
      ))}
    </Stack>
  );
}
