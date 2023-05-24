import { Route, Routes } from 'react-router-dom';
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
    const url = '/tack-blog/posts/index.json';

    useEffect(() => {
        fetchPostData(url, setPosts);
    }, []);

    return (
        <Routes>
            <Route path="/tack-blog/" element={<MainLayout />}>
                <Route index element={<Home posts={posts} />} />
                <Route
                    path="/tack-blog/posts/:categories/:fileName"
                    element={<Posts />}
                />
                <Route path="/tack-blog/qwerdfdf123456" element={<Create />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
