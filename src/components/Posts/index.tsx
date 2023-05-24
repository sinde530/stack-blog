import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import axios from 'axios';

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

                const response = await axios.get(
                    `/tack-blog/posts/${categories}/${fileName}.md`,
                );

                console.log('response Fetching post from:', response);
                console.log(
                    `Fetching post from: /tack-blog/posts/${categories}/${fileName}.md`,
                );

                if (response.status !== 200) {
                    throw new Error('Error fetching post');
                }

                setMdSource(response.data);
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
