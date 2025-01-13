import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { highlight } from "sugar-high";
import CopyCode from "./components/CopyButton";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type AsideProps = ComponentPropsWithoutRef<"aside">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type StrongProps = ComponentPropsWithoutRef<"strong">;
type ImgProps = ComponentPropsWithoutRef<"img">;
type EmProps = ComponentPropsWithoutRef<"em">;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1
      style={{
        fontSize: "2.2rem",
        fontWeight: "bold",
        // paddingTop: '0.6rem',
        // paddingBottom: '0.6rem',
      }}
      className="font-bold py-2"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-gray-800 font-medium"
      style={{
        fontSize: "1.8rem",
        // fontWeight: '',
        padding: "1rem 0 0.4rem 0",
      }}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      style={{
        fontSize: "1.2rem",
        fontWeight: "bold",
        padding: "0.3rem 0",
        // paddingTop: '0.6rem',
        // paddingBottom: '0.6rem',
      }}
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p
      className="leading-snug py-1"
      style={{
        color: "#000000",
      }}
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      style={{
        paddingLeft: "1rem",
        // listStylePosition: '',
        listStyleType: "revert",
        // display: 'list-item',
      }}
      className="text-gray-800"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      // className="text-gray-800 list-disc pl-5 space-y-1"
      style={{
        listStylePosition: "inside",
        listStyleType: "initial",
        // display: 'list-item',
      }}
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li
      style={
        {
          // paddingLeft: '1rem',
          // listStylePosition: '-moz-initial',
          // listStyleType: 'revert',
          // display: 'inline-list-item',
        }
      }
      className="py-1"
      {...props}
    >
      {props.children}
    </li>
  ),
  em: (props: EmProps) => <em className="font-medium" {...props} />,
  strong: (props: StrongProps) => <strong {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "text-blue-500 hover:text-blue-700";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ className, children, ...props }: CodeProps) => {
    const isCodeBlock = Boolean(className);
    // const language = className?.replace('language-', '');

    const codeString = children?.toString() || "";

    if (isCodeBlock) {
      // Triple-quoted code block styling
      const highlightedCode = highlight(codeString);
      return (
        <div
          className="relative rounded-lg px-4 py-2"
          style={{
            borderWidth: "1px",
            backgroundColor: "#18181b",
            borderColor: "#27272a",
            margin: "1rem 0",
            color: "#d4d4d8",
          }}
        >
          {/* {language && (
            <div className="absolute right-4 top-2 text-xs text-gray-500">
              {language}
            </div>
          )} */}
          <CopyCode code={codeString} />
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre",
              textTransform: "none",
              paddingTop: "0.1rem",
            }}
          >
            <code
              className="text-sm"
              style={{
                display: "block",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                fontFamily: "revert",
              }}
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
              {...props}
            />
          </pre>
        </div>
      );
    }

    // Single-quoted inline code styling
    return (
      <code
        style={{
          backgroundColor: "#27272a",
          color: "#d6336c",
          borderRadius: "4px",
          padding: "0.2rem 0.4rem",
          fontSize: "0.875rem",
          fontFamily: "monospace",
        }}
        {...props}
      >
        {children}
      </code>
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={nanoid()}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={nanoid()}>
            {row.map((cell, cellIndex) => (
              <td key={nanoid()}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="rounded-lg p-4"
      style={{
        margin: "1rem 0",
        borderWidth: "1px",
        backgroundColor: "#18181b",
        borderColor: "#27272a",
      }}
      {...props}
    >
      <div className="flex items-start gap-3">
        <div className="text-gray-600 text-sm leading-relaxed">
          {props.children}
        </div>
      </div>
    </blockquote>
  ),
  img: (props: ImgProps) => (
    // biome-ignore lint/a11y/useAltText: <explanation>
    <img
      alt={props.alt || "Image"}
      style={{
        maxWidth: "100%",
        width: "100%",
        height: "auto",
        marginBottom: "0.2rem",
      }}
      className="rounded-lg"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
