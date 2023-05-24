/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type PostProps = {
    categories: string;
    fileName: string;
    title: string;
    date: string;
    tags: string[];
};

type PostListProps = {
    posts: PostProps[];
};

export default function PostList({ posts }: PostListProps) {
    const [postList, setPostList] = useState<PostProps[]>([]);
    console.log('1', posts);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('./posts/index.json');
                console.log('response url:', response);
                if (!response.ok) {
                    throw new Error('Error fetching posts');
                }
                const postsData: PostProps[] = await response.json();
                console.log('postsData: ', postsData);
                setPostList(postsData);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {postList.map((post, index) => (
                <div key={index}>
                    <p>{post.date}</p>
                    <Link to={`./posts/${post.categories}/${post.fileName}`}>
                        {post.title}
                    </Link>
                    <ul>
                        {post.tags.map((tag, tagIndex) => (
                            <li key={tagIndex}>{tag}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
