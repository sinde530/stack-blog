import { Outlet } from 'react-router-dom';
import Footer from 'src/components/Footer';

export default function MainLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}
