export interface Comment {
    fullName: string;
    email: string;
    createdAt: string;
    text: string;
}

export interface CommentsListProps {
    comments: Comment[];
    onDelete: (index: number) => void;
}
