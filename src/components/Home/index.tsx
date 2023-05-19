import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import logo from 'src/assets/images/logo.png';

import Sidebar from '../Sidebar';
import Section from '../Section';

export const Container = styled.div({
    maxWidth: '1440px',
    margin: '0 auto',
});
export const Header = styled.header({
    width: '100%',
    minHeight: '64px',
    maxWidth: '100%',
    display: 'flex',
    fontSize: '20px',
    justifyContent: 'space-between',
    borderBottom: '1px solid #000',
    alignItems: 'center',
});
export const HeaderLeftBox = styled.div({
    padding: '16px 16px',
});
export const HeaderRightBox = styled.div({
    display: 'flex',
});
export const LogoText = styled(Link)({
    display: 'flex',

    '&:hover': {
        // color: '#ced4da',
        fontWeight: '600',
    },
});
export const LogoImage = styled.img({
    color: 'gray',
    width: '24px',
    height: '24px',
    filter: 'invert(44%) sepia(64%) saturate(796%) hue-rotate(151deg) brightness(101%) contrast(105%)',
});
export const ListItem = styled.ul({
    display: 'flex',
});
export const Item = styled.li({
    padding: '16px 16px',
});

export const LinkTo = styled(Link)({
    position: 'relative',

    '&:before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: '4px',
        background: '#ffbf00',
        width: '100%',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'all 0.2s ease-in-out',
    },
    '&:hover:before': {
        transform: 'scaleX(1)',
    },
});

export const MainContents = styled.div({
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'flex',
    flex: '1 0 auto',
});

export default function Home() {
    return (
        <Container>
            <Header>
                <HeaderLeftBox>
                    <LogoText to="/tack-blog/">
                        sinde530 tack blog. &zwj;
                        <LogoImage src={logo} alt={`${logo} error`} />
                    </LogoText>
                </HeaderLeftBox>
                <HeaderRightBox>
                    <ListItem>
                        <Item>
                            <LinkTo to="/tack-blog/">Home</LinkTo>
                        </Item>
                        <Item>
                            <LinkTo to="/tack-blog/category">Category</LinkTo>
                        </Item>
                    </ListItem>
                </HeaderRightBox>
            </Header>
            <MainContents>
                <Sidebar />
                <Section />
            </MainContents>
        </Container>
    );
}
