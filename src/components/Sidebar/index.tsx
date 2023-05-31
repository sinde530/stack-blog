/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import postsData from 'src/postsData';
import { keyframes } from '@emotion/react';

type ContainerProps = {
    sidebarVisible: boolean;
};

export const Container = styled.div<ContainerProps>(({ sidebarVisible }) => ({
    width: 'calc(280px - 1em)',
    overflowY: 'auto',
    height: 'calc(100vh - 2em - 2em)',
    padding: '18px 18px',

    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
    },
    '@media (max-width: 750px)': {
        display: sidebarVisible ? 'initial' : 'none',
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

const xAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(45deg);
    }
    50% {
        transform: rotate(45deg);
    }
    75% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(90deg);
    }
`;

export const ToggleButton = styled.button<{ sidebarVisible?: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  visibility: ${({ sidebarVisible }) =>
      sidebarVisible ? 'hidden' : 'visible'};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 0.2rem;
    background-color: #000;
    transform-origin: center;
    visibility: ${({ sidebarVisible }) =>
        sidebarVisible ? 'visible' : 'hidden'};
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
    animation: ${({ sidebarVisible }) =>
        sidebarVisible ? 'none' : `${xAnimation} 1s infinite`};
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
    animation: ${({ sidebarVisible }) =>
        sidebarVisible ? 'none' : `${xAnimation} 1s infinite`};
  }

  @media (max-width: 750px) {
    display: block;
  }
};`;

export default function Sidebar() {
    const image =
        'https://dummyimage.com/1000x800/000000/fff&text=Prifle+Image.';
    const totalPosts = postsData.length;
    const uniqueCategories = [
        ...new Set(postsData.map((post) => post.categories)),
    ];
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <ToggleButton
                sidebarVisible={sidebarVisible}
                onClick={toggleSidebar}
            >
                &#9776;
            </ToggleButton>
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
