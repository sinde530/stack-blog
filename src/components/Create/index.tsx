import { useState } from 'react';
import { saveAs } from 'file-saver';
import { today } from 'src/common/today';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    TextArea,
    Title,
} from './styled';

interface PostTypes {
    title: string;
    date: string;
    author: string;
    tags: string;
    categories: string;
    content: string;
}

export default function Create() {
    const [postContent, setPostContent] = useState<PostTypes>({
        title: '',
        date: today(),
        author: 'Crong',
        tags: '',
        categories: '',
        content: '',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const filePath = `/${postContent.categories}/${postContent.title}.md`;
        console.log(filePath);
        console.log(postContent.content);

        const fileContent = `---
            title: ${postContent.title}
            date: ${postContent.date}
            author: ${postContent.author}
            tags: ${postContent.tags}
            categories: ${postContent.categories}
            ---
    
        ${postContent.content}`;

        try {
            const blob = new Blob([fileContent], {
                type: 'text/markdown;charset=utf-8',
            });

            saveAs(blob, filePath);

            console.log('File created successfully!');

            setPostContent({
                title: '',
                date: today(),
                author: 'Crong',
                tags: '',
                categories: '',
                content: '',
            });
        } catch (error) {
            console.error('Error:', error);
        }
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
