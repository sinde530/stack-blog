import styled from '@emotion/styled';
import Heading from 'src/common/Heading';
import calenderImage from 'src/assets/images/calendar.png';

export const Container = styled.div({
    // backgroundColor: 'blue',
    padding: '12px 12px',
    width: 'calc(100% - 300px)',
});

export const PostContainer = styled.div({
    padding: '16px 0 16px 0',
});

export const TodayBox = styled.div({
    display: 'flex',
});

export const CalenderImage = styled.img({
    width: '16px',
    height: '16px',
    marginRight: '8px',
});

export const WirteDate = styled.p({
    fontSize: '16px',
});

export default function Section() {
    return (
        <Container>
            <Heading>Resent Posts</Heading>

            <PostContainer>
                <TodayBox>
                    <CalenderImage
                        src={calenderImage}
                        alt={`${calenderImage} error`}
                    />
                    <WirteDate>2023-05-19</WirteDate>
                </TodayBox>
                <p>Section</p>
            </PostContainer>
        </Container>
    );
}
