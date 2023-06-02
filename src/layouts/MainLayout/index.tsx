import styled from '@emotion/styled';
import { useState } from 'react';
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
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

    return (
        <Container>
            <Header
                sidebarVisible={sidebarVisible}
                setSidebarVisible={setSidebarVisible}
            />
            <MainContents>
                <Sidebar sidebarVisible={sidebarVisible} />
                <Outlet />
            </MainContents>
            <Footer />
        </Container>
    );
}
