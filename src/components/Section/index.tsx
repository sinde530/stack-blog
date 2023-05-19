import styled from '@emotion/styled';
import Heading from 'src/common/Heading';
import calenderImage from 'src/assets/images/calendar.png';

export const Container = styled.div({
    // backgroundColor: 'blue',
    padding: '12px 12px',
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
