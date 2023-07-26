import styled from '@emotion/styled';

type ContainerProps = {
    sidebarVisible: boolean;
};

export const Container = styled.div<ContainerProps>(({ sidebarVisible }) => ({
    width: 'calc(280px - 1em)',
    overflowY: 'auto',
    height: 'calc(100vh - 2em - 5em)',
    padding: '18px 18px',

    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
    },

    '@media (max-width: 750px)': {
        padding: '0',
        display: 'table',
        position: 'absolute',
        width: '100%',
        left: sidebarVisible ? '0' : '-105%',
        transition: 'left 0.5s ease',
        overflowY: 'visible',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 999,
        marginLeft: sidebarVisible ? '0' : '-100vw',
        background: '#a9a9a9',
    },
}));

export const Div = styled.div({
    paddingTop: '1rem',
    paddingBottom: '1rem',
});

export const Profile = styled.div({
    display: 'grid',
    '@media (max-width: 750px)': {
        margin: '16px 16px',
    },
});

export const ProfileImage = styled.img({
    width: '250px',
    height: '180px',
    borderRadius: '30px',
});

export const A = styled.a({
    paddingBottom: '4px',

    '&:hover': {
        textDecoration: 'underline',
    },
});

export const Categories = styled.div({
    paddingTop: '1rem',
    '@media (max-width: 750px)': {
        margin: '16px 16px',
    },
});

export const WholeTexts = styled.p({
    paddingBottom: '24px',
});

export const CategoriesBox = styled.div({});

export const Span = styled.span({
    paddingTop: '6px',
    paddingBottom: '6px',
    fontSize: '28px',
    borderBottom: '1px solid #5f6365',
    color: '#f39c12',
    display: 'block',
});

export const Ul = styled.ul({
    padding: '8px 0 8px 0',
});

export const Li = styled.li({
    color: '#300B0B',
    padding: '4px',
});
