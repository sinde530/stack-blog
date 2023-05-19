import styled from '@emotion/styled';

export const Container = styled.div({
    backgroundColor: 'blue',
    padding: '12px 12px',
});

export default function Section() {
    return (
        <Container>
            <p>Section</p>
        </Container>
    );
}
