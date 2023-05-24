import PostList from '../PostList';

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

export default function Home({ posts }: PostListProps) {
    return <PostList posts={posts} />;
}
