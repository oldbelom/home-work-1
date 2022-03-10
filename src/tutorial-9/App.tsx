import React, { useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import useDebounce from './hooks/useDebounce';
import './App.css';

interface IUser {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    location: string;
    blog: string;
    public_repos: number;
    followers: number;
    following: number;
}

function App() {
    const [user, setUser] = useState<IUser>();
    const [inputValue, setinputValue] = useState<string>('');
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const debouncedInputValue = useDebounce(inputValue, 500);

    React.useEffect(() => {
        if (debouncedInputValue) {
            getUser();
        }
    }, [debouncedInputValue]);

    const getUser = () => {
        setIsLoading((prev) => !prev);
        axios
            .get(`https://api.github.com/users/${inputValue}`)
            .then((response: AxiosResponse) => {
                setUser(response.data);
                setIsEmpty(false);
            })
            .catch((error: AxiosError) => {
                if (error.response!.status === 404) {
                    setIsEmpty(true);
                }
                console.log(error);
            })
            .finally(() => setIsLoading((prev) => !prev));
    };

    return (
        <div className="app-container">
            <div className="app-form">
                <input
                    value={inputValue}
                    onChange={(e) => setinputValue(e.target.value)}
                    type="text"
                    className="app-input"
                    placeholder="Укажите GitHub-аккаунт"
                />
                <button className="app-form_btn" disabled={isLoading} onClick={getUser}>
                    Найти
                </button>
            </div>
            {isLoading ? (
                <span>Загрузка...</span>
            ) : (
                <>
                    {isEmpty ? (
                        <div className="app-user">Пользователь не найден</div>
                    ) : (
                        <>
                            {user && (
                                <div className="app-user">
                                    <div className="app-user_info">
                                        <div className="app-user_image">
                                            <img src={user.avatar_url} alt="avatar" />
                                        </div>
                                        <div className="app-user_data">
                                            <h1 className="app-user_name">
                                                {user.name}
                                                <span>@{user.login}</span>
                                            </h1>
                                            <p className="app-user_about">{user.bio}</p>
                                        </div>
                                    </div>
                                    <ul className="app-user_stats">
                                        <li className="app-user_stats-item">
                                            Репозитории
                                            <span>{user.public_repos}</span>
                                        </li>
                                        <li className="app-user_stats-item">
                                            Подписчиков
                                            <span>{user.followers}</span>
                                        </li>
                                        <li className="app-user_stats-item">
                                            Подписок
                                            <span>{user.following}</span>
                                        </li>
                                    </ul>
                                    <ul className="app-user_location">
                                        <li className="app-user_location-item">{user.location}</li>
                                        <li className="app-user_location-item">
                                            <a href={user.blog}>{user.blog}</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default App;
