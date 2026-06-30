import { ContentBlock } from "./articles";

interface ArticleContentProps {
  blocks: ContentBlock[];
}

// Convertit **gras** et *italique* en <strong>/<em>, retourne des noeuds React
function parseInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="article-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading2":
            return (
              <h2 key={i} className="article-content__h2">
                {parseInline(block.text)}
              </h2>
            );
          case "heading3":
            return (
              <h3 key={i} className="article-content__h3">
                {parseInline(block.text)}
              </h3>
            );
          case "heading4":
            return (
              <h4 key={i} className="article-content__h4">
                {parseInline(block.text)}
              </h4>
            );
          case "list":
            return (
              <ul key={i} className="article-content__list">
                {block.items.map((item, j) => (
                  <li key={j}>{parseInline(item)}</li>
                ))}
              </ul>
            );
          case "paragraph":
          default:
            return (
              <p key={i} className="article-content__p">
                {parseInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}