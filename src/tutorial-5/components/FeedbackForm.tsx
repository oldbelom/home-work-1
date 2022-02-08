import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Comment } from '../types';

const FeedbackForm = ({ setComments }: any) => {
    const [fields, setFields] = React.useState<Comment>({
        fullName: '',
        email: '',
        createdAt: String(new Date()),
        text: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleFormSubmit = () => {
        const newComment: Comment = {
            ...fields,
            createdAt: String(new Date()),
        };

        setComments((prev: Comment[]) => [...prev, newComment]);

        setFields((prev) => ({
            ...prev,
            email: '',
            fullName: '',
            text: '',
        }));
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
                name="fullName"
                value={fields.fullName}
                onChange={handleInputChange}
                label="Имя"
                variant="outlined"
                margin="dense"
            />
            <TextField
                name="email"
                value={fields.email}
                onChange={handleInputChange}
                label="Почта"
                variant="outlined"
                margin="dense"
            />
            <TextField
                name="text"
                value={fields.text}
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
