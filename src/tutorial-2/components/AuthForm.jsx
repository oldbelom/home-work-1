import React from 'react';
import './AuthForm.css';

export default function AuthForm() {
    let email = '';
    let password = '';

    const handleChangeInput = (event) => {
        if (event.target.type === 'text') {
            email = event.target.value;
        } else {
            password = event.target.value;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email.trim() && password.trim()) {
            console.log({ email, password });
            event.target.reset();
            email = '';
            password = '';
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
