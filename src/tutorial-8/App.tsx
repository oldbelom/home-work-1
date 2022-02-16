import React from 'react';
import './App.css';

interface IUser {
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    phone: string;
}

function App() {
    const [users, setUsers] = React.useState<IUser[]>([]);

    const getUsers: () => void = async () => {
        try {
            const response = await fetch('https://620a478f92946600171c593c.mockapi.io/users');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            let message;
            if (error instanceof Error) {
                message = error.message;
            } else {
                message = String(error);
            }
            console.log(message);
        }
    };

    return (
        <div>
            <button onClick={getUsers}>Получить список пользователей</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
