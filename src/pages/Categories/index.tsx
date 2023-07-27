/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Heading from 'src/common/Heading';
import { Container } from 'src/components/Posts/styled';
import postsData from 'src/postsData';
import {
    CategoriesBox,
    CategoryItem,
    CategoryLink,
    CategoryList,
    CategoryTitle,
    ContentWrapper,
} from './styled';

export default function Categories() {
    const [postList, setPostList] = useState<PostProps[]>([]);
    const uniqueCategories = [
        ...new Set(postsData.map((post) => post.categories)),
    ];

    useEffect(() => {
        setPostList(postsData);
    });

    return (
        <Container>
            <Heading>Categories</Heading>
            <ContentWrapper>
                {uniqueCategories.map((category) => (
                    <CategoriesBox key={category}>
                        <CategoryTitle>{category}</CategoryTitle>
                        <CategoryList>
                            {postList
                                .filter((post) => post.categories === category)
                                .map((post, index) => (
                                    <CategoryItem key={index}>
                                        <CategoryLink
                                            to={`/posts/${post.categories}/${post.fileName}`}
                                        >
                                            {post.title}
                                        </CategoryLink>
                                    </CategoryItem>
                                ))}
                        </CategoryList>
                    </CategoriesBox>
                ))}
            </ContentWrapper>
        </Container>
    );
}
