/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import Heading from 'src/common/Heading';
import { Container, PostContainer } from './styled';

interface FileData {
    title: string;
    date: string;
    tags: string[];
    content: string;
}

async function fetchFileContents(filePath: string): Promise<string> {
    const response = await fetch(filePath);
    return response.text();
}

function getFilePaths(): string[] {
    return ['tack-blog/posts/blog/first-write.md'];
}

export default function Section() {
    const [fileDataList, setFileDataList] = useState<FileData[]>([]);

    useEffect(() => {
        const fetchAllFiles = async () => {
            const filePaths = getFilePaths();
            try {
                const allFileContents = await Promise.all(
                    filePaths.map(async (filePath) => {
                        const content = await fetchFileContents(filePath);
                        const fileData: FileData = {
                            title: 'Title',
                            date: 'Date',
                            tags: ['tag1', 'tag2'],
                            content,
                        };
                        return fileData;
                    }),
                );
                setFileDataList(allFileContents);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllFiles();
    }, []);

    return (
        <Container>
            <Heading>Recent Posts</Heading>
            {fileDataList.map((fileData, index) => (
                <PostContainer key={index}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
                        {fileData.content}
                    </ReactMarkdown>
                </PostContainer>
            ))}
        </Container>
    );
}
