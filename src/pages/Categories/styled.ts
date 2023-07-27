// import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';

// export const ContentWrapper = styled.div({
//     display: 'flex',
//     flexDirection: 'column',
//     '@media (min-width: 768px)': {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//     },
// });

// export const CategoriesBox = styled.div({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '20px',
//     padding: '20px',
//     boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
//     borderRadius: '10px',
//     width: '100%',
//     '@media (min-width: 768px)': {
//         width: '30%',
//     },
// });

// export const CategoryTitle = styled.p({
//     fontSize: '20px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
// });

// export const CategoryList = styled.ul({
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     width: '100%',
// });

// export const CategoryItem = styled.li({
//     marginBottom: '10px',
//     '@media (min-width: 768px)': {
//         width: '100%',
//     },
// });

// export const CategoryLink = styled(Link)({
//     textDecoration: 'none',
//     color: '#000',
// });

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContentWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
    '@media (min-width: 768px)': {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export const CategoriesBox = styled.div({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    borderRadius: '15px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    margin: '10px 0',
    padding: '20px',
    boxSizing: 'border-box',
    width: '100%',
    '@media (min-width: 768px)': {
        width: '30%',
    },
});

export const CategoryTitle = styled.p({
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#333',
});

export const CategoryList = styled.ul({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
});

export const CategoryItem = styled.li({
    marginBottom: '10px',
    '@media (min-width: 768px)': {
        width: '100%',
    },
});

export const CategoryLink = styled(Link)({
    textDecoration: 'none',
    color: '#007BFF',
    ':hover': {
        color: '#0056b3',
        textDecoration: 'underline',
    },
});
