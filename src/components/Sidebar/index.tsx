import styled from '@emotion/styled';

export const Container = styled.div({
    backgroundColor: 'red',
    width: 'calc(300px - 1em)',
    overflowY: 'auto',
    height: 'calc(100vh - 2em - 2em)',
    padding: '12px 12px',
});

export const Profile = styled.div({});

export const ProfileImage = styled.img({
    width: '250px',
    height: '180px',
});

export const Categories = styled.div({});

export default function Sidebar() {
    const image =
        'https://dummyimage.com/1000x800/000000/fff&text=Prifle+Image';

    return (
        <Container>
            <Profile>
                <ProfileImage src={image} alt="" />
                <p>Sidebar</p>
            </Profile>
            <Categories>
                <ul>
                    <li>list 1</li>
                    <li>list 2</li>
                    <li>list 3</li>
                    <li>list 4</li>
                    <li>list 5</li>
                </ul>
            </Categories>
        </Container>
    );
}
