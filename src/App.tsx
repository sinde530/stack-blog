import { Outlet, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Create from './components/Create';
import Posts from './components/Posts';

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/tack-blog" element={<Outlet />}>
                    <Route
                        path="/tack-blog/posts/:folderName/:fileName/:title"
                        element={<Posts />}
                    />

                    <Route index element={<Home />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/tack-blog/qwerdfdf123456" element={<Create />} />
        </Routes>
    );
}
