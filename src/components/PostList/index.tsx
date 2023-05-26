/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostProps } from 'src/App';

export default function PostList({ posts }: { posts: PostProps[] }) {
    const [postList, setPostList] = useState<PostProps[]>([]);
    console.log('1', posts);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/tack-blog/posts/index.json');

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
                    <Link to={`/posts/${post.categories}/${post.fileName}`}>
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
