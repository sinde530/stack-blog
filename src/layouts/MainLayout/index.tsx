import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Sidebar from 'src/components/Sidebar';

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

export default function MainLayout() {
    return (
        <Container>
            <Header />
            <MainContents>
                <Sidebar />
                <Outlet />
            </MainContents>
            <Footer />
        </Container>
    );
}
