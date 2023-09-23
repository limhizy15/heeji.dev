import { allPosts } from "@/.contentlayer/generated";
import MdxRenderer from "@/app/_components/NdxRenderer";
import { Container, Divider, Heading, Text } from "@chakra-ui/react";

function getPost(title: string) {
  const foundPost = allPosts.find(
    (post) => post.title === decodeURIComponent(title)
  );
  return foundPost;
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getPost(params.slug);

  // TODO: 컴포넌트화
  return (
    <Container maxW={"container.md"} paddingBlock={8}>
      <Heading>{data?.title}</Heading>

      <Text color={"gray.400"}>{data?.date}</Text>

      <Divider my={4} colorScheme={"blackAlpha"} />
      {/* <Text>HEEJI</Text> */}

      <MdxRenderer data={data} />
    </Container>
  );
}
