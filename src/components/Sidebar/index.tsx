/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import postsData from 'src/postsData';

type ContainerProps = {
    sidebarVisible: boolean;
};

export const Container = styled.div<ContainerProps>(({ sidebarVisible }) => ({
    width: sidebarVisible ? 'calc(280px - 1em)' : '0',
    overflowY: 'auto',
    height: 'calc(100vh - 2em - 2em)',
    padding: sidebarVisible ? '18px 18px' : '0',
    transition: 'width 0.3s ease',

    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
    },
}));

export const Div = styled.div({
    paddingTop: '1rem',
    paddingBottom: '1rem',
});

export const Profile = styled.div({
    display: 'grid',
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

export const ToggleButton = styled.button({
    position: 'absolute',
    display: 'none',
    top: '1rem',
    right: '1rem',
    padding: '0.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',

    '@media (max-width: 750px)': {
        display: 'block',
    },
});

export default function Sidebar() {
    const image =
        'https://dummyimage.com/1000x800/000000/fff&text=Prifle+Image.';
    const totalPosts = postsData.length;
    const uniqueCategories = [
        ...new Set(postsData.map((post) => post.categories)),
    ];
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <ToggleButton onClick={toggleSidebar}>&#9776;</ToggleButton>
            <Container sidebarVisible={sidebarVisible}>
                <Profile>
                    <ProfileImage src={image} alt="" />
                    <Div>
                        <p>Title</p>
                        <p>Description</p>
                    </Div>

                    <A href="https://www.naver.com" target="__blank">
                        <img src="" alt="" />
                        Email
                    </A>
                    <A href="example" target="__blank">
                        <img src="" alt="" />
                        GitHub
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
                                    .filter(
                                        (post) => post.categories === category,
                                    )
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
        </>
    );
}
