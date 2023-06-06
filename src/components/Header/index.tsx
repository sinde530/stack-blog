import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logo.png';
import { css, keyframes } from '@emotion/react';

export const HeaderContainer = styled.header({
    width: '100%',
    minHeight: '78px',
    maxWidth: '100%',
    display: 'flex',
    fontSize: '20px',
    justifyContent: 'space-between',
    borderBottom: '1px solid #000',
    alignItems: 'center',
});
export const HeaderLeftBox = styled.div({
    padding: '16px 16px',
});
export const HeaderRightBox = styled.div({
    display: 'flex',
});
export const LogoText = styled(Link)({
    display: 'flex',

    '&:hover': {
        // color: '#ced4da',
        fontWeight: '600',
    },
});
export const LogoImage = styled.img({
    color: 'gray',
    width: '24px',
    height: '24px',
    filter: 'invert(44%) sepia(64%) saturate(796%) hue-rotate(151deg) brightness(101%) contrast(105%)',
});
export const ListItem = styled.ul({
    display: 'flex',
});
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

const xAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(45deg);
    }
    50% {
        transform: rotate(45deg);
    }
    75% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(90deg);
    }
`;

export const ToggleBox = styled.div({
    padding: '16px 32px',
    display: 'none',

    '@media (max-width: 750px)': {
        display: 'flex',
    },
});

export const ToggleButton = styled.button<{ sidebarVisible?: boolean }>`
  position: absolute;
  display: none;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  visibility: ${({ sidebarVisible }) =>
      sidebarVisible ? 'hidden' : 'visible'};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 0.2rem;
    background-color: #000;
    transform-origin: center;
    visibility: ${({ sidebarVisible }) =>
        sidebarVisible ? 'visible' : 'hidden'};
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
    animation: ${({ sidebarVisible }) =>
        sidebarVisible
            ? 'none'
            : css`
                  ${xAnimation} 1s infinite
              `};
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
    animation: ${({ sidebarVisible }) =>
        sidebarVisible
            ? 'none'
            : css`
                  ${xAnimation} 1s infinite
              `};
  }

  @media (max-width: 750px) {
    display: block;
  }
};`;

interface SidebarToggleProps {
    sidebarVisible: boolean;
    setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
    sidebarVisible,
    setSidebarVisible,
}: SidebarToggleProps) {
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <HeaderContainer>
            <HeaderLeftBox>
                <LogoText to="/">
                    sinde530 tack blog. &zwj;
                    <LogoImage src={logo} alt={`${logo} error`} />
                </LogoText>
            </HeaderLeftBox>
            <HeaderRightBox>
                <ListItem>
                    <Item>
                        <LinkTo to="/">Home</LinkTo>
                    </Item>
                    <Item>
                        <LinkTo to="/categories">Category</LinkTo>
                    </Item>
                    <ToggleBox>
                        <ToggleButton
                            sidebarVisible={sidebarVisible}
                            onClick={toggleSidebar}
                        >
                            &#9776;
                        </ToggleButton>
                    </ToggleBox>
                </ListItem>
            </HeaderRightBox>
        </HeaderContainer>
    );
}
