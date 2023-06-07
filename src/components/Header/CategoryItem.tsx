import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li({
    padding: '16px 16px',
});

export const LinkTo = styled(Link)({
    position: 'relative',

    '&:before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: '4px',
        background: '#ffbf00',
        width: '100%',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'all 0.2s ease-in-out',
    },
    '&:hover:before': {
        transform: 'scaleX(1)',
    },
});

interface Props {
    CloseModal?: () => void;
}

export default function CategoryItem({ CloseModal }: Props) {
    return (
        <Item>
            <LinkTo to="/categories" onClick={CloseModal}>
                Category
            </LinkTo>
        </Item>
    );
}
