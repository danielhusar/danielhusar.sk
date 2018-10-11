import { ImageSharp } from './graphql';

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
