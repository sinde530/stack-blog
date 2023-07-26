/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import calenderImage from 'src/assets/images/calendar.png';
import Heading from 'src/common/Heading';
import postsData from 'src/postsData';

export const Container = styled.div({
    // backgroundColor: 'blue',
    padding: '12px 12px',
    width: 'calc(100% - 300px)',

    '@media (max-width: 750px)': {
        width: '100%',
    },
});

export const PostContainer = styled.div({
    padding: '16px 0 16px 0',

    '@media (max-width: 750px)': {
        padding: '16px 4px',
    },
});

export const TodayBox = styled.div({
    display: 'flex',
});

export const CalenderImage = styled.img({
    width: '14px',
    height: '14px',
    marginRight: '8px',
});

export const WirteDate = styled.p({
    fontSize: '14px',
});

export const Title = styled.p({
    fontSize: '20px',
    fontWeight: '600',
    paddingTop: '8px',
    paddingBottom: '16px',
});

export const TagBox = styled.div({
    display: 'flex',
});

export const DateBox = styled.div({
    display: 'flex',
});

export const TagText = styled(Link)({
    padding: '3px 8px',
    marginRight: '10px',
    marginBottom: '8px',
    border: '1px solid #373C3F',
    borderRadius: '4px',
    backgroundColor: '#132c75',
    color: '#f39c12',
    zIndex: '99999',

    '&:hover': {
        backgroundColor: '#000',
        color: '#ffc005',
    },
});

export default function PostList() {
    const [postList, setPostList] = useState<PostProps[]>([]);

    useEffect(() => {
        setPostList(postsData);
    }, []);

    return (
        <Container>
            <Heading>Recent Posts</Heading>

            {postList.map((post, index) => (
                <PostContainer key={index}>
                    <Link to={`/posts/${post.categories}/${post.fileName}`}>
                        <DateBox>
                            <CalenderImage
                                src={calenderImage}
                                alt={`${calenderImage} error`}
                            />
                            <WirteDate>{post.date}</WirteDate>
                        </DateBox>

                        <Title>{post.title}</Title>
                    </Link>

                    {Array.isArray(post.tags) &&
                        post.tags
                            .join(' ')
                            .split(' ')
                            .map((tag, tagIndex) => (
                                <TagText key={tagIndex} to={`/${tag}`}>
                                    {tag}
                                </TagText>
                            ))}
                </PostContainer>
            ))}
        </Container>
    );
}
