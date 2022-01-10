import React from 'react';
import './AuthForm.css';

export default function AuthForm() {
    let email = '';
    let password = '';

    const handleChangeInput = (e) => {
        e.target.type === 'text' ? (email = e.target.value) : (password = e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() !== '' && password.trim() !== '') {
            console.log({ email, password });
            e.target.reset();
        } else {
            alert('Необходимо заполнить поля');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChangeInput} placeholder="E-mail" />
            <input type="password" onChange={handleChangeInput} placeholder="Пароль" />
            <button type="submit">Войти</button>
        </form>
    );
}
