import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

export type PostProps = {
    categories: string;
    fileName: string;
    title: string;
};

export default function Posts() {
    const { categories, fileName, title } = useParams<PostProps>();
    const [mdSource, setMdSource] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPostContent = async () => {
            try {
                setIsLoading(true);
                // const url = `/tack-blog/posts/${categories}/${fileName}.md`;
                // const url = `tack-blog/posts/${categories}/${fileName}.md`;
                const url = `/posts/${categories}/${fileName}.md`;
                console.log('Fetching post from:', url);
                const response = await fetch(url);

                console.log('response Fetching post from:', url);

                if (!response.ok) {
                    throw new Error('Error fetching post');
                }
                const mdSources = await response.text();
                setMdSource(mdSources);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostContent();
    }, [categories, fileName, title]);

    return (
        <div className="post">
            {isLoading ? (
                <div>
                    <span>Loading</span>
                </div>
            ) : (
                mdSource && (
                    <>
                        <ReactMarkdown
                            className="markdown"
                            rehypePlugins={[rehypeHighlight]}
                        >
                            {mdSource}
                        </ReactMarkdown>

                        <div>
                            <Link to="/tack-blog">Home</Link>
                        </div>
                    </>
                )
            )}
        </div>
    );
}
