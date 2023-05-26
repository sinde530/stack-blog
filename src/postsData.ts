import { PostProps } from './App';

const postsData: PostProps[] = [
    {
        title: '블로그를 작성해 보자.',
        date: '2022-06-02',
        author: 'Crong',
        tags: ['tutorial', 'blog', 'test'],
        categories: 'blog',
        fileName: 'first-write',
    },
    {
        title: '레포지토리 테스트용 md파일.',
        date: '2022-06-26',
        author: 'Crong',
        tags: ['tutorial', 'blog', 'test'],
        categories: 'test',
        fileName: 'test',
    },
    {
        title: '레포지토리 이미지 테스트용 md파일',
        date: '2022-06-26',
        author: 'Crong',
        tags: ['tutorial', 'blog', 'test'],
        categories: 'test',
        fileName: 'image-test',
    },
];

export default postsData;
