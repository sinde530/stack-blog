import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Create from './components/Create';
import Posts from './components/Posts';
import Home from './pages/Home';

import Categories from './pages/Categories';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="/posts/:categories/:fileName"
                    element={<Posts />}
                />
                <Route path="/categories" element={<Categories />} />
                <Route path="/qwerdfdf123456" element={<Create />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
