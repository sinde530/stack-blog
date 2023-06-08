import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import axios from 'axios';
import styled from '@emotion/styled';
import matter from 'gray-matter';

export const Container = styled.div({
    padding: '12px 12px',
    width: 'calc(100% - 300px)',

    '@media (max-width: 750px)': {
        width: '100%',
    },
});

const MarkdownStyle = styled.div({
    fontFamily: '"Arial", sans-serif',
    lineHeight: '1.5',
    color: '#333',
    h1: {
        fontSize: '2.5em',
        // borderBottom: '1px solid #eaecef',
    },
    h2: {
        fontSize: '2em',
        color: '#0366d6',
    },
    p: {
        marginBottom: '1em',
    },
    a: {
        color: '#0366d6',
        textDecoration: 'none',
    },
    img: {
        maxWidth: '100%',
    },
    '.markdown': {
        code: {
            fontSize: '1.2em',
            color: '#d63384',
        },
    },
    hr: {
        display: 'none',
    },
});

export type ParamProps = {
    categories: string;
    fileName: string;
    title: string;
    date: string;
};

export default function Posts() {
    const { categories, fileName, title, date } = useParams<ParamProps>();
    const [mdSource, setMdSource] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [metaData, setMetadata] = useState<any>(null);
    const url = `https://raw.githubusercontent.com/sinde530/tack-blog/master/public/posts/${categories}/${fileName}.md`;
    const localUrl = `http://localhost:5173/tack-blog/posts/${categories}/${fileName}.md`;

    useEffect(() => {
        const fetchPostContent = async () => {
            try {
                setIsLoading(true);

                let response;
                try {
                    response = await axios.get(url);
                } catch {
                    response = await axios.get(localUrl);
                }
                const { data } = response;
                const parsedMarkdown = matter(data);

                // setMdSource(response.data);
                setMdSource(parsedMarkdown.content);
                setMetadata(parsedMarkdown.data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostContent();
    }, [categories, fileName, title, date]);

    return (
        <Container>
            {isLoading ? (
                <div>
                    <span>Loading</span>
                </div>
            ) : (
                mdSource && (
                    <>
                        {metaData && (
                            <div>
                                <p>{metaData.title}</p>
                                <p>{metaData.date}</p>
                                <p>{metaData.author}</p>
                                <div>
                                    {metaData.tags.map((tag: string) => (
                                        <p key={tag}>{tag}</p>
                                    ))}
                                </div>
                                <p>{metaData.categories}</p>
                            </div>
                        )}
                        <MarkdownStyle>
                            <ReactMarkdown
                                className="markdown"
                                rehypePlugins={[rehypeHighlight]}
                            >
                                {mdSource}
                            </ReactMarkdown>
                        </MarkdownStyle>
                        <div>
                            <Link to="/tack-blog">Home</Link>
                        </div>
                    </>
                )
            )}
        </Container>
    );
}
