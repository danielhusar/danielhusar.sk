import { FluidObject } from 'gatsby-image';
import { ImageSharp } from './graphql';

export interface allMdx {
  edges: edge[];
}

export interface mdx {
  excerpt: string;
  timeToRead: number;
  fields: {
    title: string;
    slug: string;
    categories: string[];
    date: Date;
    filename: {
      name: string;
    };
  };
  frontmatter: {
    banner?: {
      childImageSharp: {
        fluid: FluidObject;
      };
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
  timeToRead: number;
  fields: {
    url: string;
    title: string;
    date: Date;
  };
  frontmatter: {
    banner?: {
      childImageSharp: ImageSharp;
    };
  };
}

export type categories = 'home' | 'en' | 'sk' | 'post';
