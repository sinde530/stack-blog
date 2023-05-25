import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';

export type ParamProps = {
    categories: string;
    fileName: string;
};

export default function Posts() {
    const { categories, fileName } = useParams<ParamProps>();
    const [mdSource, setMdSource] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPostContent = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `/tack-blog/posts/${categories}/${fileName}.md`,
                );
                console.log(response);
                setMdSource(response.data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostContent();
    }, [categories, fileName]);

    if (isLoading) {
        <div>Loading...</div>;
    }

    return (
        <div className="post">
            {mdSource ? (
                <ReactMarkdown
                    className="markdown"
                    rehypePlugins={[rehypeHighlight]}
                >
                    {mdSource}
                </ReactMarkdown>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
