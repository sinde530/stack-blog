import { PostProps } from 'src/App';
import PostList from '../PostList';

export default function Home({ posts }: { posts: PostProps[] }) {
    return <PostList posts={posts} />;
}
