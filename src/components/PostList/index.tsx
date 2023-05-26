/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostProps } from 'src/App';
import postsData from 'src/postsData';

export default function PostList() {
    const [postList, setPostList] = useState<PostProps[]>([]);
    console.log('1', postList);

    useEffect(() => {
        setPostList(postsData);
        console.log('posts', postList);
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
