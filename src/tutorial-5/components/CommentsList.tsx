import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CommentsListProps } from '../types';

const CommentsList: React.FC<CommentsListProps> = ({ comments, onDelete }) => {
    const getLocateDate = (date: string): string => {
        const parsedDate = new Date(date);
        const localeDate = parsedDate.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return localeDate;
    };

    return (
        <List
            sx={{
                width: '350px',
                p: '20px',
                border: '1px solid lightgray',
                borderRadius: '4px',
                bgcolor: 'background.paper',
                mb: '20px',
            }}>
            <h3 style={{ marginTop: '0' }}>Отзывы:</h3>
            {comments.length ? (
                comments.map((item, index) => (
                    <div key={index}>
                        <ListItem style={{ wordBreak: 'break-word' }}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.fullName}
                                secondary={
                                    <React.Fragment>
                                        {item.text}
                                        <Typography
                                            sx={{
                                                display: 'block',
                                                pt: '5px',
                                                fontStyle: 'italic',
                                            }}
                                            component="span"
                                            variant="body2"
                                            color="text.secondary">
                                            {getLocateDate(item.createdAt)}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <IconButton
                                size="small"
                                color="inherit"
                                onClick={() => onDelete(index)}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </ListItem>
                    </div>
                ))
            ) : (
                <span>Пока отзывов нет</span>
            )}
        </List>
    );
};

export default CommentsList;
