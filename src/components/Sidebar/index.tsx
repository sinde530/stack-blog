/* eslint-disable react/no-array-index-key */

import { Link } from 'react-router-dom';
import { handleScrollTop } from 'src/common/scrollTop';
import { windowWIdthUpdate } from 'src/common/windowWIdthUpdater';
import postsData from 'src/postsData';
import CategoryItem from '../Header/CategoryItem';
import HomeItem from '../Header/HomeItem';
import {
    A,
    Categories,
    CategoriesBox,
    Container,
    Div,
    Li,
    Profile,
    ProfileImage,
    Span,
    Ul,
    WholeTexts,
} from './styled';

export default function Sidebar({
    sidebarVisible,
    setSidebarVisible,
}: {
    sidebarVisible: boolean;
    setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const windowWidth = windowWIdthUpdate();
    const image =
        'https://dummyimage.com/1000x800/000000/fff&text=Prifle+Image.';
    const totalPosts = postsData.length;
    const uniqueCategories = [
        ...new Set(postsData.map((post) => post.categories)),
    ];

    const CloseModal = () => {
        setSidebarVisible(!setSidebarVisible);
        handleScrollTop();
    };

    return (
        <Container sidebarVisible={sidebarVisible}>
            {windowWidth < 480 && <HomeItem CloseModal={CloseModal} />}
            {windowWidth < 396 && <CategoryItem CloseModal={CloseModal} />}
            <Profile>
                <ProfileImage src={image} alt="" />
                <Div>
                    <p>Title</p>
                    <p>Description</p>
                </Div>

                <A
                    href="https://www.naver.com"
                    target="__blank"
                    onClick={CloseModal}
                >
                    Email: sinde530@naver.com
                </A>
                <A
                    href="https://github.com/sinde530"
                    target="__blank"
                    onClick={CloseModal}
                >
                    GitHub: sinde530
                </A>
            </Profile>
            <Categories>
                <WholeTexts>
                    <img src="" alt="" />
                    전체 글 수 {totalPosts}개
                </WholeTexts>
                {uniqueCategories.map((category) => (
                    <CategoriesBox key={category}>
                        <Span>{category}</Span>
                        <Ul>
                            {postsData
                                .filter((post) => post.categories === category)
                                .map((post, index) => (
                                    <Li key={index}>
                                        <Link
                                            to={`posts/${post.categories}/${post.fileName}`}
                                            onClick={CloseModal}
                                        >
                                            {post.title}
                                        </Link>
                                    </Li>
                                ))}
                        </Ul>
                    </CategoriesBox>
                ))}
            </Categories>
        </Container>
    );
}
