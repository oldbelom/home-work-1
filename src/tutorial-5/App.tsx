import React from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import CommentsList from './components/CommentsList';
import { Comment } from './types';

export default function App() {
    const [comments, setComments] = React.useState<Comment[]>([]);

    React.useEffect(() => {
        const localComments = JSON.parse(localStorage.getItem('comments') as string);
        if (localComments) {
            setComments(localComments);
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const deleteComment = (index: number) => {
        const newArr = comments.filter((_, i) => i !== index);
        setComments(newArr);
    };

    return (
        <>
            <CommentsList comments={comments} onDelete={deleteComment} />
            <FeedbackForm setComments={setComments} />
        </>
    );
}
