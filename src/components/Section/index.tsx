import Heading from 'src/common/Heading';
import calenderImage from 'src/assets/images/calendar.png';
import { Link } from 'react-router-dom';
import { fetchFileContents } from 'src/common/markdownTranslation';
import { useEffect, useState } from 'react';
import matter from 'gray-matter';

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
    tags: string;
}

export default function Section() {
    const [fileData, setFileData] = useState<FileData>({
        title: '',
        date: '',
        tags: '',
    });

    useEffect(() => {
        const getFileData = async () => {
            try {
                const fileContents = await fetchFileContents();
                const { data } = matter(fileContents);
                // setFileData(data);
                setFileData((prevData) => ({
                    ...prevData,
                    ...data,
                }));
            } catch (error) {
                console.error(error);
            }
        };

        getFileData();
    }, []);

    const { title, date, tags } = fileData;
    const split = fileData.tags.split(' ');

    return (
        <Container>
            <Heading>Recent Posts</Heading>

            <PostContainer>
                <Link to="/">
                    <TodayBox>
                        <CalenderImage
                            src={calenderImage}
                            alt={`${calenderImage} error`}
                        />
                        <WirteDate>{date}</WirteDate>
                    </TodayBox>
                </Link>

                <Link to="/">
                    <Title>{title}</Title>
                </Link>

                <TagBox>
                    {split.map((tag, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <TagText key={index} to={`/${tags}`}>
                            {tag}
                        </TagText>
                    ))}
                </TagBox>
            </PostContainer>
        </Container>
    );
}
