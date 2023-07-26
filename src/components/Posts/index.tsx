import MarkdownIt from 'markdown-it';
import markdownItFrontMatter from 'markdown-it-front-matter';
import { ComponentPropsWithRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import { Link, useParams } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import yaml from 'yaml';
import {
    Author,
    Box,
    Container,
    Date,
    FullStop,
    MarkdownStyle,
    MeataDataBox,
    TagText,
    Title,
    WrapperTags,
} from './styled';

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
    const { categories, fileName } = useParams<ParamProps>();
    const [mdSource, setMdSource] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [metaData, setMetadata] = useState<any>(null);
    const url = `/tack-blog/posts/${categories}/${fileName}.md`;

    useEffect(() => {
        const fetchPostContent = async () => {
            try {
                setIsLoading(true);

                let response: any;
                try {
                    const res = await fetch(url);
                    response = await res.text();
                } catch (error) {
                    console.error(error);
                }

                const md = new MarkdownIt();
                let frontMatterData;

                // eslint-disable-next-line func-names
                md.use(markdownItFrontMatter, function (fm: any) {
                    frontMatterData = fm;
                });

                md.render(response);

                const contentWithoutFrontMatter = response.replace(
                    /---[\s\S]*?---/,
                    '',
                );

                setMdSource(contentWithoutFrontMatter);
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
    }, [fileName]);

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
                            <MeataDataBox>
                                <Title>{metaData.title}</Title>
                                <Box>
                                    <Author>{metaData.author}</Author>
                                    <FullStop>·</FullStop>
                                    <Date>{metaData.date}</Date>
                                </Box>
                                <WrapperTags>
                                    {metaData.tags.map((tag: string) => (
                                        <TagText to={`/${tag}`} key={tag}>
                                            {tag}
                                        </TagText>
                                    ))}
                                </WrapperTags>
                            </MeataDataBox>
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
                            <Link to="/">Home</Link>
                        </div>
                    </>
                )
            )}
        </Container>
    );
}
