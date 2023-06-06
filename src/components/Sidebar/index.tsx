/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import postsData from 'src/postsData';

type ContainerProps = {
    sidebarVisible: boolean;
};

export const Container = styled.div<ContainerProps>(({ sidebarVisible }) => ({
    width: 'calc(280px - 1em)',
    overflowY: 'auto',
    height: 'calc(100vh - 2em - 5em)',
    padding: '18px 18px',

    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
    },

    '@media (max-width: 750px)': {
        padding: '0',
        display: 'table',
        position: 'absolute',
        width: '100%',
        background: '#fff',
        left: sidebarVisible ? '0' : '-105%',
        transition: 'left 0.5s ease',
        overflowY: 'visible',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 999,
        marginLeft: sidebarVisible ? '0' : '-100vw',
    },
}));

export const Div = styled.div({
    paddingTop: '1rem',
    paddingBottom: '1rem',
});

export const Profile = styled.div({
    display: 'grid',
    '@media (max-width: 750px)': {
        margin: '16px 16px',
    },
});

export const ProfileImage = styled.img({
    width: '250px',
    height: '180px',
    borderRadius: '30px',
});

export const A = styled.a({
    paddingBottom: '4px',

    '&:hover': {
        textDecoration: 'underline',
    },
});

export const Categories = styled.div({
    paddingTop: '1rem',
    '@media (max-width: 750px)': {
        margin: '16px 16px',
    },
});

export const WholeTexts = styled.p({
    paddingBottom: '24px',
});

export const CategoriesBox = styled.div({});

export const Span = styled.span({
    paddingTop: '6px',
    paddingBottom: '6px',
    fontSize: '28px',
    borderBottom: '1px solid #5f6365',
    color: '#ffd559',
    display: 'block',
});

export const Ul = styled.ul({
    padding: '8px 0 8px 0',
});

export const Li = styled.li({
    color: '#300B0B',
    padding: '4px',
});

export default function Sidebar({
    sidebarVisible,
}: {
    sidebarVisible: boolean;
}) {
    const image =
        'https://dummyimage.com/1000x800/000000/fff&text=Prifle+Image.';
    const totalPosts = postsData.length;
    const uniqueCategories = [
        ...new Set(postsData.map((post) => post.categories)),
    ];

    return (
        <Container sidebarVisible={sidebarVisible}>
            <Profile>
                <ProfileImage src={image} alt="" />
                <Div>
                    <p>Title</p>
                    <p>Description</p>
                </Div>

                <A href="https://www.naver.com" target="__blank">
                    Email: sinde530@naver.com
                </A>
                <A href="example" target="__blank">
                    GitHub: https://github.com/sinde530
                </A>
            </Profile>
            <Categories>
                <WholeTexts>
                    <img src="" alt="" />
                    전체 글 수 {totalPosts}개
                </WholeTexts>
                {uniqueCategories.map((category) => (
                    <CategoriesBox key={category}>
                        <Span>{category}</Span>
                        <Ul>
                            {postsData
                                .filter((post) => post.categories === category)
                                .map((post, index) => (
                                    <Li key={index}>
                                        <Link
                                            to={`posts/${post.categories}/${post.fileName}`}
                                        >
                                            {post.title}
                                        </Link>
                                    </Li>
                                ))}
                        </Ul>
                    </CategoriesBox>
                ))}
            </Categories>
        </Container>
    );
}
