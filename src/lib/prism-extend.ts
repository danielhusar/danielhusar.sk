import Prism from 'prismjs';

// https://prismjs.com/extending.html

Prism.languages.css = Prism.languages.css || {
  comment: /\/\*[\s\S]*?\*\//,
  // @ts-ignore
  atrule: {
    pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
    inside: {
      rule: /@[\w-]+/,
      // See rest below
    },
  },
  url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  selector: /[^{}\s][^{};]*?(?=\s*\{)/,
  string: {
    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    // @ts-ignore
    greedy: true,
  },
  property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
  important: /!important\b/i,
  function: /[-a-z0-9]+(?=\()/i,
  punctuation: /[(){};:,]/,
};
