import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    margin-top: 20px;
`;

export const FormGroup = styled.p`
    margin-bottom: 10px;
`;

export const Label = styled.label`
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    padding: 10px 16px;
    font-size: 16px;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;
