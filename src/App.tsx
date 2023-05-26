import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './components/Home';
import Create from './components/Create';
import Posts from './components/Posts';

import NotFound from './components/NotFound';
import Categories from './components/Categories';

export type PostProps = {
    categories: string;
    fileName: string;
    title: string;
    date: string;
    author: string;
    tags: string[];
};

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
