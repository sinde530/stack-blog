import { Outlet, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/tack-blog/" element={<Outlet />}>
                    <Route index element={<Home />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
