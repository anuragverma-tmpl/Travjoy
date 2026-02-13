import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import DOMPurify from "isomorphic-dompurify";
import { cn } from "@/lib/utils";

export default function TourMarkdown({ content,className }) {
  return (
    <div className={cn("", className)} >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={DOMPurify.sanitize(content)}
        remarkPlugins={[remarkGfm]}
        
      />
     
    </div>
  );
}
