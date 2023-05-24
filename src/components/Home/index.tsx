import styled from '@emotion/styled';

import Sidebar from '../Sidebar';
import PostList from '../PostList';
import Header from '../Header';

export const Container = styled.div({
    maxWidth: '1440px',
    margin: '0 auto',
});

export const MainContents = styled.div({
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'flex',
    flex: '1 0 auto',
});

type PostProps = {
    categories: string;
    fileName: string;
    title: string;
    date: string;
    tags: string[];
};

type PostListProps = {
    posts: PostProps[];
};

export default function Home({ posts }: PostListProps) {
    return (
        <Container>
            <Header />
            <MainContents>
                <Sidebar />
                <PostList posts={posts} />
            </MainContents>
        </Container>
    );
}
