import { Outlet, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
import MainLayout from './layouts/MainLayout';

import Home from './components/Home';
import Create from './components/Create';
import Posts from './components/Posts';

import NotFound from './components/NotFound';

type PostProps = {
    categories: string;
    fileName: string;
    title: string;
    date: string;
    tags: string[];
};

const fetchPostData = async (url: string, setPosts: Function) => {
    try {
        const { data } = await axios.get(url);
        setPosts(data);
    } catch (error: any) {
        console.error(`error checked ${error.message}`);
    }
};

export default function App() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const url = './posts/index.json';

    useEffect(() => {
        fetchPostData(url, setPosts);
    }, []);

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/tack-blog" element={<Outlet />}>
                    <Route
                        key={window.location.pathname}
                        path="/tack-blog/posts/:categories/:fileName"
                        element={<Posts />}
                    />

                    <Route index element={<Home posts={posts} />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/tack-blog/qwerdfdf123456" element={<Create />} />
        </Routes>
    );
}
