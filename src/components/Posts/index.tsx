import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

type PostProps = {
    folderName: string;
    fileName: string;
    title: string;
};

export default function Posts() {
    const { folderName, fileName, title } = useParams<PostProps>();
    const [mdSource, setMdSource] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPostContent = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `./posts/${folderName}/${fileName}/${title}.md`,
                );
                if (!response.ok) {
                    throw new Error('Error fetching post');
                }
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const mdSource = await response.text();
                setMdSource(mdSource);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostContent();
    }, [title]);

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
