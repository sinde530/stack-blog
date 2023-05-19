import styled from '@emotion/styled';

interface Prop {
    children: React.ReactNode;
}

export const HeaderText = styled.h3({
    borderBottom: '1px solid #5f6365',
    fontSize: '24px',
    color: '#ffd966',
    paddingBottom: '18px',
    paddingTop: '18px',
});

export default function Heading({ children }: Prop) {
    return <HeaderText>{children}</HeaderText>;
}
