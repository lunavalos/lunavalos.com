import React from 'react';
import Image from 'next/image';
import { getMediaUrl } from '@/lib/payload';

interface RichTextProps {
  content: any;
  className?: string;
}

export default function RichText({ content, className = '' }: RichTextProps) {
  if (!content || !content.root || !content.root.children) {
    return null;
  }

  const renderNodes = (nodes: any[]) => {
    return nodes.map((node, index) => {
      switch (node.type) {
        case 'paragraph':
          return (
            <p key={index} className="mb-4 text-brand/80 leading-relaxed">
              {renderNodes(node.children)}
            </p>
          );
        case 'heading':
          const Tag = `h${node.tag}` as any;
          const headingClasses: Record<string, string> = {
            h1: 'text-4xl md:text-5xl font-display font-bold text-brand mt-12 mb-6',
            h2: 'text-3xl md:text-4xl font-display font-bold text-brand mt-10 mb-5',
            h3: 'text-2xl md:text-3xl font-display font-bold text-brand mt-8 mb-4',
            h4: 'text-xl md:text-2xl font-display font-bold text-brand mt-6 mb-3',
          };
          return (
            <Tag key={`heading-${index}`} className={headingClasses[Tag] || headingClasses.h2}>
              {renderNodes(node.children)}
            </Tag>
          );
        case 'list':
          const ListTag = node.listType === 'number' ? 'ol' : 'ul';
          return (
            <ListTag key={index} className="mb-6 ml-6 list-outside">
              {renderNodes(node.children)}
            </ListTag>
          );
        case 'listitem':
          return (
            <li key={index} className="mb-2 text-brand/80 leading-relaxed list-disc">
              {renderNodes(node.children)}
            </li>
          );
        case 'upload':
          if (node.relationTo === 'media') {
            const media = node.value;
            return (
              <div key={index} className="my-12 relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={getMediaUrl(media)}
                  alt={media.alt || ''}
                  fill
                  className="object-cover"
                />
              </div>
            );
          }
          return null;
        case 'text':
          let text = node.text;
          if (node.format & 1) text = <strong key={index}>{text}</strong>; // Bold
          if (node.format & 2) text = <em key={index}>{text}</em>; // Italic
          if (node.format & 8) text = <u key={index}>{text}</u>; // Underline
          return text;
        case 'link':
            return (
                <a 
                    key={index} 
                    href={node.fields.url} 
                    target={node.fields.newTab ? '_blank' : '_self'}
                    className="text-secondary hover:underline transition-all"
                >
                    {renderNodes(node.children)}
                </a>
            )
        default:
          return null;
      }
    });
  };

  return (
    <div className={`prose prose-brand max-w-none ${className}`}>
      {renderNodes(content.root.children)}
    </div>
  );
}
