"use client";

import {
  Card,
  Code,
  Heading,
  Link,
  OrderedList,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const mdxComponents: MDXComponents = {
  a: (props) => (
    <Link color={"blue.500"} style={{ fontWeight: "bold" }} {...props}></Link>
  ),
  h2: (props) => (
    <Heading fontSize={"2xl"} pt={4} {...props} lineHeight={1.8}></Heading>
  ),
  h3: (props) => <h3 className="text-xl pt-8 font-bold" {...props}></h3>,
  ul: (props) => <UnorderedList {...props}></UnorderedList>,
  ol: (props) => <OrderedList {...props}></OrderedList>,
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");

    return match ? (
      //@ts-ignore
      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
        {...props}
        style={dark}
      ></SyntaxHighlighter>
    ) : (
      <Code
        {...props}
        style={{
          //@ts-ignore
          textWrap: "wrap",
          fontWeight: "bold",
        }}
      >
        {children}
      </Code>
    );
  },
  p: (props) => <Text {...props} style={{ lineHeight: 1.7 }}></Text>,
  blockquote: (props) => (
    <Card variant={"outline"} p={4}>
      <blockquote {...props}></blockquote>
    </Card>
  ),
};

export default function MdxRenderer({ data }: { data: any }) {
  const MDXComponent = useMDXComponent(data?.body?.code ?? "");

  return <MDXComponent components={mdxComponents} />;
}
