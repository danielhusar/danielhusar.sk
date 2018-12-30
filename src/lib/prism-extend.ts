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

const javascript = Prism.util.clone(Prism.languages.javascript);

Prism.languages.jsx = Prism.languages.extend('markup', javascript);
// @ts-ignore
Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;

// @ts-ignore
Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
// @ts-ignore
Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
// @ts-ignore
Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*$/;

Prism.languages.insertBefore(
  'inside',
  'attr-name',
  {
    // @ts-ignore
    spread: {
      pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
      inside: {
        punctuation: /\.{3}|[{}.]/,
        'attr-value': /\w+/,
      },
    },
  },
  // @ts-ignore
  Prism.languages.jsx.tag
);

Prism.languages.insertBefore(
  'inside',
  'attr-value',
  {
    // @ts-ignore
    script: {
      // Allow for two levels of nesting
      pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
      inside: {
        'script-punctuation': {
          pattern: /^=(?={)/,
          alias: 'punctuation',
        },
        rest: Prism.languages.jsx,
      },
      alias: 'language-javascript',
    },
  },
  // @ts-ignore
  Prism.languages.jsx.tag
);

Prism.languages.json = {
  property: /".*?"(?=\s*:)/gi,
  string: /"(?!:)(\\?[^"])*?"(?!:)/g,
  number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
  punctuation: /[{}[\]);,]/g,
  operator: /:/g,
  boolean: /\b(true|false)\b/gi,
  null: /\bnull\b/gi,
};

Prism.languages.jsonp = Prism.languages.json;
