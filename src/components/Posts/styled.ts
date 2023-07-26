import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div({
    padding: '12px 12px',
    width: 'calc(100% - 300px)',

    '@media (max-width: 750px)': {
        width: '100%',
    },
});

export const MarkdownStyle = styled.div({
    fontFamily: '"Arial", sans-serif',
    lineHeight: '1.5',
    color: '#333',
    a: {
        color: '#0366d6',
        textDecoration: 'none',
    },
    img: {
        maxWidth: '100%',
    },
    '.markdown': {
        code: {
            fontSize: '1.2em',
            // color: '#d63384',
        },
        pre: {
            backgroundColor: '#2d2d2d',
            color: '#c9a5a5',
            // overflow: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
        },
        'pre.language-javascript': {
            backgroundColor: '#212529',
        },
        'pre.language-typescript': {
            backgroundColor: '#212529',
            color: '#d63384',
        },
        'pre.language-css': {
            backgroundColor: '#1c7ed6',
        },
        'pre.language-html': {
            backgroundColor: '#f06529',
        },
        'pre.language-python': {
            backgroundColor: '#3572A5',
        },
    },
    li: {
        listStyle: 'disc',
        marginLeft: '1rem',
    },
    hr: {
        display: 'none',
    },
});

export const MeataDataBox = styled.div({
    marginBottom: '32px',
    borderBottom: 'solid 1px #363f47',
});

export const Title = styled.p({
    fontSize: '34px',
    fontWeight: '900',
    paddingBottom: '4px',
});

export const Box = styled.div({
    display: 'flex',
    paddingBottom: '12px',
});

export const Author = styled.p({
    fontWeight: 'bold',
    fontSize: '16px',
    paddingLeft: '2px',
});

export const Date = styled.p({
    fontSize: '16px',
});

export const FullStop = styled.span({
    padding: '0 12px 0 12px',
});

export const WrapperTags = styled.div({
    display: 'flex',
});

export const TagText = styled(Link)({
    padding: '3px 8px',
    marginRight: '10px',
    marginBottom: '8px',
    border: '1px solid #373C3F',
    borderRadius: '4px',
    backgroundColor: '#132c75',
    color: '#f39c12',

    '&:hover': {
        backgroundColor: '#000',
        color: '#ffc005',
    },
});
