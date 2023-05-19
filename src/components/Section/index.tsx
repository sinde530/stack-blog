import Heading from 'src/common/Heading';
import calenderImage from 'src/assets/images/calendar.png';
import { Link } from 'react-router-dom';
import {
    CalenderImage,
    Container,
    PostContainer,
    TagBox,
    TagText,
    Title,
    TodayBox,
    WirteDate,
} from './styled';

export default function Section() {
    return (
        <Container>
            <Heading>Resent Posts</Heading>

            <PostContainer>
                <Link to="/">
                    <TodayBox>
                        <CalenderImage
                            src={calenderImage}
                            alt={`${calenderImage} error`}
                        />
                        <WirteDate>2023-05-19</WirteDate>
                    </TodayBox>

                    <Title>블로그를 작성해 보자.</Title>

                    <TagBox>
                        <TagText to="/blog">blog</TagText>
                        <TagText to="/testcode">test code</TagText>
                        <TagText to="/typescript">typescript</TagText>
                    </TagBox>
                </Link>
            </PostContainer>
        </Container>
    );
}
