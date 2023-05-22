/* eslint-disable react/no-array-index-key */
import Heading from 'src/common/Heading';
import calenderImage from 'src/assets/images/calendar.png';
import { Link } from 'react-router-dom';
import { filePaths, getFileData } from 'src/common/markdownTranslation';
import { useEffect, useState } from 'react';

import {
    CalenderImage,
    Container,
    PostContainer,
    TagBox,
    TagText,
    Title,
    TodayBox,
    WirteDate,
} from './styled';

interface FileData {
    title: string;
    date: string;
    tags: string[];
}

export default function Section() {
    const [fileDataList, setFileDataList] = useState<FileData[]>([]);

    useEffect(() => {
        const getFileDataForAllFiles = async () => {
            try {
                const fileDataPromises = filePaths.map((filePath) =>
                    getFileData(filePath),
                );
                const allFileData = await Promise.all(fileDataPromises);

                allFileData.forEach((data) => {
                    const { title, date, tags } = data;
                    console.log(title, date, tags);
                });

                setFileDataList(allFileData);
            } catch (error) {
                console.error(error);
            }
        };

        getFileDataForAllFiles();
    }, []);

    return (
        <Container>
            <Heading>Recent Posts</Heading>

            {fileDataList.map((fileData, index) => (
                <PostContainer key={index}>
                    <Link to="/">
                        <TodayBox>
                            <CalenderImage
                                src={calenderImage}
                                alt={`${calenderImage} error`}
                            />
                            <WirteDate>{fileData.date}</WirteDate>
                        </TodayBox>
                    </Link>

                    <Link to="/">
                        <Title>{fileData.title}</Title>
                    </Link>

                    <TagBox>
                        {fileData.tags.map((tag, tagIndex) => (
                            <TagText key={tagIndex} to={`/${tag}`}>
                                {tag}
                            </TagText>
                        ))}
                    </TagBox>
                </PostContainer>
            ))}
        </Container>
    );
}
