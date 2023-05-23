import { Outlet, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Create from './components/Create';
import Posts from './components/Posts';
// import PostList from './components/PostList';

type PostProps = {
    categories: string;
    fileName: string;
    title: string;
    date: string;
    tags: string[];
};

export default function App() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const url = './posts/index.json';

    const fetchPostData = async () => {
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json',
            },
        });
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        fetchPostData();
    }, []);

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/tack-blog" element={<Outlet />}>
                    <Route
                        path="/tack-blog/posts/:folderName/:fileName/:title"
                        element={<Posts />}
                    />

                    <Route index element={<Home posts={posts} />} />
                    {/* <Route index element={<PostList posts={posts} />} /> */}
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/tack-blog/qwerdfdf123456" element={<Create />} />
        </Routes>
    );
}
