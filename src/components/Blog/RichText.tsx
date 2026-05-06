import React from 'react';

interface LexicalNode {
  type: string;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  tag?: string;
  listType?: 'number' | 'bullet';
  [key: string]: any;
}

const IS_BOLD = 1;
const IS_ITALIC = 1 << 1;
const IS_STRIKETHROUGH = 1 << 2;
const IS_UNDERLINE = 1 << 3;
const IS_CODE = 1 << 4;
const IS_SUBSCRIPT = 1 << 5;
const IS_SUPERSCRIPT = 1 << 6;

const TextNode = ({ node }: { node: LexicalNode }) => {
  let text = node.text || '';
  let element = <>{text}</>;

  if (node.format & IS_BOLD) element = <strong>{element}</strong>;
  if (node.format & IS_ITALIC) element = <em>{element}</em>;
  if (node.format & IS_STRIKETHROUGH) element = <span className="line-through">{element}</span>;
  if (node.format & IS_UNDERLINE) element = <span className="underline">{element}</span>;
  if (node.format & IS_CODE) element = <code className="bg-white/10 px-1 rounded text-sm">{element}</code>;
  
  return element;
};

const NodeRenderer = ({ node, isBlogDetail }: { node: LexicalNode, isBlogDetail: boolean }) => {
  if (node.type === 'text') {
    return <TextNode node={node} />;
  }

  const children = node.children?.map((child, i) => (
    <NodeRenderer key={i} node={child} isBlogDetail={isBlogDetail} />
  ));

  switch (node.type) {
    case 'root':
      return <div className="rich-text">{children}</div>;
    case 'paragraph':
      return <p className="mb-6 leading-relaxed text-slate-600">{children}</p>;
    case 'heading':
      const Tag = (node.tag || 'h2') as keyof JSX.IntrinsicElements;
      const headingStyles: Record<string, React.CSSProperties> = {
        h1: { color: '#193074' },
        h2: { color: '#193074' },
        h3: { color: '#f99f1f' },
        h4: { color: '#193074' },
      };
      
      const headingClasses: Record<string, string> = {
        h1: "text-4xl md:text-5xl font-display font-bold mb-8 mt-12",
        h2: "text-3xl md:text-4xl font-display font-bold mb-6 mt-10",
        h3: "text-2xl md:text-3xl font-display font-bold mb-4 mt-8",
        h4: "text-xl md:text-2xl font-display font-bold mb-4 mt-6",
      };

      return (
        <Tag 
          className={headingClasses[node.tag || 'h2'] || headingClasses.h2}
          style={isBlogDetail ? (headingStyles[node.tag || 'h2'] || headingStyles.h2) : {}}
        >
          {children}
        </Tag>
      );
    case 'list':
      if (node.listType === 'bullet') {
        return <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">{children}</ul>;
      }
      return <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-600">{children}</ol>;
    case 'listitem':
      return <li>{children}</li>;
    case 'quote':
      return (
        <blockquote className="border-l-4 border-secondary pl-6 py-2 italic my-8 text-slate-800 bg-slate-50 rounded-r">
          {children}
        </blockquote>
      );
    case 'link':
      return (
        <a 
          href={node.fields?.url} 
          className="text-secondary hover:underline transition-all font-medium"
          target={node.fields?.newTab ? '_blank' : undefined}
          rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    case 'linebreak':
      return <br />;
    case 'horizontalrule':
      return <hr className="my-8 border-slate-200" />;
    default:
      return <>{children}</>;
  }
};

export default function RichText({ content, className = '', isBlogDetail = false }: { content: any; className?: string; isBlogDetail?: boolean }) {
  if (!content || !content.root) return null;
  return (
    <div className={`max-w-none prose prose-slate prose-headings:font-display ${className}`}>
      <NodeRenderer node={content.root} isBlogDetail={isBlogDetail} />
    </div>
  );
}
