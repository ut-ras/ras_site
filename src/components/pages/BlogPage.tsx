import ReactMarkdown from 'react-markdown';
import markdown from "@/posts/2015-09-01-newblog.md";

export default function Blog() {
    return <main>
        <ReactMarkdown
            children={markdown}
        /> </main>
}