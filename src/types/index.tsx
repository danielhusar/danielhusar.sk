import { ImageSharp } from './graphql';

export interface allMdx {
  edges: edge[];
}

export interface mdx {
  frontmatter: {
    title: string;
    slug: string;
    categories: string[];
    date: Date;
    banner?: {
      childImageSharp: ImageSharp;
    };
  };

  code: {
    body: string;
  };
}

export interface edge {
  node: node;
}

export interface node {
  id: number;
  excerpt: string;
  fields: {
    url: string;
  };
  frontmatter: {
    title: string;
    date: Date;
    banner?: {
      childImageSharp: ImageSharp;
    };
  };
}

export type categories = 'home' | 'english' | 'slovak' | 'post';
