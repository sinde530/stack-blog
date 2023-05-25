import { PostProps } from 'src/App';
import PostList from '../PostList';

// type PostProps = {
//     categories: string;
//     fileName: string;
//     title: string;
//     date: string;
//     tags: string[];
// };

// type PostListProps = {
//     posts: PostProps[];
// };

export default function Home({ posts }: { posts: PostProps[] }) {
    return <PostList posts={posts} />;
}
