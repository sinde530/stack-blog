import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { PostProps } from 'src/App';
import axios from 'axios';

export type ParamProps = {
    categories: string;
    fileName: string;
};

export default function Posts({ posts }: { posts: PostProps[] }) {
    const { categories, fileName } = useParams<ParamProps>();
    const [mdSource, setMdSource] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const post = posts.find(
        (item) => item.categories === categories && item.fileName === fileName,
    );

    useEffect(() => {
        const fetchPostContent = async () => {
            try {
                setIsLoading(true);

                const response = await axios.get(
                    `/tack-blog/posts/${categories}/${fileName}.md`,
                );

                const markdownContent = response.data;
                setMdSource(markdownContent);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostContent();
    }, [categories, fileName]);

    // useEffect(() => {
    //     const fetchPostContent = async () => {
    //         try {
    //             setIsLoading(true);

    //             const response = await fetch(
    //                 `/tack-blog/posts/${categories}/${fileName}.md`,
    //             );

    //             if (!response.ok) {
    //                 throw new Error('Error fetching post');
    //             }

    //             const markdownContent = await response.text();
    //             setMdSource(markdownContent);
    //         } catch (error) {
    //             console.error('Failed to fetch post:', error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchPostContent();
    // }, [categories, fileName]);

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

                        <h1>{post?.title}</h1>
                        <p>{post?.date}</p>
                        <div>
                            <Link to="/tack-blog">Home</Link>
                        </div>
                    </>
                )
            )}
        </div>
    );
}
