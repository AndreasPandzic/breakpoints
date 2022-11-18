import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ImageWysiwyg from "src/components/wysiwygWrapper/image";
import Link from "src/components/wysiwygWrapper/link";

export default function WysiwygWrapper({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const components = {
    a: Link,
    p: (
      props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      >
    ) => {
      if (Array.isArray(props.children)) {
        let index = 0;
        return (
          <p className={className}>
            {props.children.map((child) => {
              if (child.type === "img") {
                return <ImageWysiwyg key={"img" + index} {...child.props} />;
              }
              index++;
              return child;
            })}
          </p>
        );
      }
      return <p>{props.children}</p>;
    },
    // url: Url,
    // i: Italic,
    // b: Bold,
    // u: Underline,
    // ul: UnorderedList,
    // ol: OrderedList,
    // li: ListItem,
    // quote: Quote,
  };

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
