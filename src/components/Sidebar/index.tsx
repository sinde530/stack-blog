import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Container = styled.div({
    width: 'calc(300px - 1em)',
    overflowY: 'auto',
    height: 'calc(100vh - 2em - 2em)',
    padding: '12px 12px',

    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
    },
});

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
    // color: '#fff2cc', // TODO: 테마 변경시 이색상으로 변경
    color: '#300B0B',
    padding: '4px',
});

export default function Sidebar() {
    const image =
        'https://dummyimage.com/1000x800/000000/fff&text=Prifle+Image';

    return (
        <Container>
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
                    전체 글 수 999개
                </WholeTexts>
                <CategoriesBox>
                    <Span>TypeScript</Span>
                    <Ul>
                        <Li>
                            <Link to="/">List 1 (150개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 2 (123개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 3 (60개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 4 (13개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 5 (3개)</Link>
                        </Li>
                    </Ul>
                </CategoriesBox>
                <CategoriesBox>
                    <Span>Python</Span>
                    <Ul>
                        <Li>
                            <Link to="/">List 1 (150개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 2 (123개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 3 (60개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 4 (13개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 5 (3개)</Link>
                        </Li>
                    </Ul>
                </CategoriesBox>
                <CategoriesBox>
                    <Span>Go</Span>
                    <Ul>
                        <Li>
                            <Link to="/">List 1 (150개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 2 (123개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 3 (60개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 4 (13개)</Link>
                        </Li>
                        <Li>
                            <Link to="/">List 5 (3개)</Link>
                        </Li>
                    </Ul>
                </CategoriesBox>
            </Categories>
        </Container>
    );
}
