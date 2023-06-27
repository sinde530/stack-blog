import styled from '@emotion/styled';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import markdownItFrontMatter from 'markdown-it-front-matter';
import { ComponentPropsWithRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import { Link, useParams } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import yaml from 'yaml';

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

type ImgProps = ComponentPropsWithRef<'img'> & ReactMarkdownProps;

const MarkdownImage: React.FC<ImgProps> = ({ alt, src, title, ...props }) => {
    const { categories, fileName } = useParams<ParamProps>();

    // 이미지 경로가 외부 URL인 경우
    if (src?.startsWith('http')) {
        return (
            <img
                src={src}
                alt={alt}
                title={title}
                style={{ maxWidth: '100%' }}
                {...props}
            />
        );
    }

    let imageUrl = src;
    if (categories && fileName && src) {
        imageUrl = `/tack-blog/posts/${categories}/${src}`;
    }

    return (
        <img
            src={imageUrl}
            alt={alt}
            title={title}
            style={{ maxWidth: '100%' }}
            {...props}
        />
    );
};

function renderMarkdownImage(props: ReactMarkdownProps & { node: any }) {
    return <MarkdownImage {...props} />;
}

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

                const md = new MarkdownIt();
                let frontMatterData;

                // eslint-disable-next-line func-names
                md.use(markdownItFrontMatter, function (fm: any) {
                    frontMatterData = fm;
                });

                const markdownContent = md.render(response.data);

                setMdSource(markdownContent);
                if (frontMatterData) {
                    setMetadata(yaml.parse(frontMatterData));
                } else {
                    setMetadata({});
                }
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
                                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                                components={{
                                    img: renderMarkdownImage,
                                }}
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
