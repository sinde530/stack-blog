import styled from '@emotion/styled';
import { useState } from 'react';
import { today } from 'src/common/today';

interface PostTypes {
    title: string;
    date: string;
    author: string;
    tags: string;
    categories: string;
}

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Form = styled.form`
    margin-top: 20px;
`;

const FormGroup = styled.p`
    margin-bottom: 10px;
`;

const Label = styled.label`
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    padding: 10px 16px;
    font-size: 16px;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export default function Create() {
    const [postContent, setPostContent] = useState<PostTypes>({
        title: '',
        date: today(),
        author: 'Crong',
        tags: '',
        categories: '',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handleSubmit 함수를 구현하여 폼 데이터를 저장하는 로직을 추가합니다.
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        setPostContent((prevPostContent) => ({
            ...prevPostContent,
            [name]: value,
        }));
    };

    return (
        <Container>
            <Title>Create New Post</Title>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title:</Label>
                    <Input
                        type="text"
                        name="title"
                        value={postContent.title}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>
                        Date:
                        <Input
                            type="text"
                            name="date"
                            value={postContent.date}
                            onChange={handleChange}
                        />
                    </Label>
                </FormGroup>

                <FormGroup>
                    <Label>
                        Author:
                        <Input
                            type="text"
                            name="author"
                            value={postContent.author}
                            onChange={handleChange}
                        />
                    </Label>
                </FormGroup>

                <FormGroup>
                    <Label>
                        Tags:
                        <Input
                            type="text"
                            name="tags"
                            value={postContent.tags}
                            onChange={handleChange}
                            placeholder="소문자, ,없이 띄어쓰기를 해서 작성해주세요. ex: tag test react"
                        />
                    </Label>
                </FormGroup>

                <FormGroup>
                    <Label>
                        Categories:
                        <Input
                            type="text"
                            name="categories"
                            value={postContent.categories}
                            onChange={handleChange}
                            placeholder="소문자로 작성하되 한가지의 카테고리만 설정해주세요."
                        />
                    </Label>
                </FormGroup>

                <FormGroup>
                    <Label>
                        Content:
                        <TextArea name="content" onChange={handleChange} />
                    </Label>
                </FormGroup>

                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    );
}
