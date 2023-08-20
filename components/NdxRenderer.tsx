"use client";

import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="text-xl md:text-2xl mt-12 font-bold text-primary"
      {...props}
    ></h2>
  ),
  h3: (props) => <h3 className="text-xl pt-8 font-bold" {...props}></h3>,
  ul: (props) => (
    <ul
      className="marker:text-blue-500 list-disc pl-5 space-y-3"
      {...props}
    ></ul>
  ),
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
      <code
        className="stack bg-accent-content text-black p-2 rounded-lg text-sm"
        {...props}
        style={{
          //@ts-ignore
          textWrap: "wrap",
        }}
      >
        {children}
      </code>
    );
  },
};

export default function MdxRenderer({ data }: { data: any }) {
  const MDXComponent = useMDXComponent(data?.body?.code ?? "");

  return <MDXComponent components={mdxComponents} />;
}
