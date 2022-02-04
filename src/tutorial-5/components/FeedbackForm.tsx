import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Comment } from '../types';

const FeedbackForm = ({ setComments }: any) => {
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [text, setText] = React.useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id === 'name') {
            setName(event.target.value);
        } else if (event.target.id === 'email') {
            setEmail(event.target.value);
        } else {
            setText(event.target.value);
        }
    };

    const handleFormSubmit = () => {
        const newComment: Comment = {
            fullName: name,
            email: email,
            createdAt: String(new Date()),
            text: text,
        };

        setComments((prev: Comment[]) => [...prev, newComment]);
        setName('');
        setEmail('');
        setText('');
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '350px',
                p: '20px',
                border: '1px solid lightgray',
                borderRadius: '4px',
                bgcolor: 'background.paper',
            }}
            noValidate
            autoComplete="off">
            <h2 style={{ margin: '0' }}>Обратная связь:</h2>
            <TextField
                id="name"
                value={name}
                onChange={handleInputChange}
                label="Имя"
                variant="outlined"
                margin="dense"
            />
            <TextField
                id="email"
                value={email}
                onChange={handleInputChange}
                label="Почта"
                variant="outlined"
                margin="dense"
            />
            <TextField
                id="text"
                value={text}
                onChange={handleInputChange}
                label="Текст..."
                variant="outlined"
                multiline
                rows={4}
                margin="dense"
            />
            <Button
                onClick={() => handleFormSubmit()}
                style={{ marginTop: '8px' }}
                variant="contained">
                отправить
            </Button>
        </Box>
    );
};

export default FeedbackForm;
