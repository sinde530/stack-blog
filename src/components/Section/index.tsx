/* eslint-disable react/no-array-index-key */
// Additional imports needed
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { fetchFileContents, filePaths } from 'src/common/markdownTranslation';
import Heading from 'src/common/Heading';
import { Container, PostContainer } from './styled';

interface FileData {
    title: string;
    date: string;
    tags: string[];
}

// Inside your Section component
export default function Section() {
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [fileDataList, setFileDataList] = useState<FileData[]>([]);

    useEffect(() => {
        // Additional useEffect for fetching and setting markdown content
        const fetchMarkdown = async (filePath: string) => {
            try {
                const markdown = await fetchFileContents(filePath);
                setMarkdownContent(markdown);
            } catch (error) {
                console.error(error);
            }
        };

        // Call this function with the required filePath
        fetchMarkdown(filePaths[0]); // filePaths[0] can be replaced with the required file path
    }, [fileDataList]);

    // Keep your existing code

    // Add ReactMarkdown component for rendering markdown
    return (
        <Container>
            <Heading>Recent Posts</Heading>

            {fileDataList.map(
                (fileData, index) =>
                    fileData && (
                        <PostContainer key={index}>
                            {/* Keep your existing code */}
                        </PostContainer>
                    ),
            )}

            <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
                {markdownContent}
            </ReactMarkdown>
        </Container>
    );
}
