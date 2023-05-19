import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
    width: '14px',
    height: '14px',
    marginRight: '8px',
});

export const WirteDate = styled.p({
    fontSize: '14px',
});

export const Title = styled.p({
    fontSize: '20px',
    fontWeight: '600',
    paddingTop: '8px',
    paddingBottom: '16px',
});

export const TagBox = styled.div({
    display: 'flex',
});

export const TagText = styled(Link)({
    padding: '3px 8px',
    marginRight: '10px',
    marginBottom: '8px',
    border: '1px solid #373C3F',
    borderRadius: '4px',
    backgroundColor: '#6d7275',
    color: '#ffc005',
    zIndex: '99999',

    '&:hover': {
        backgroundColor: '#000',
        color: '#ffc005',
    },
});
