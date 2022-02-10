import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css';

interface FormFields {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

function App() {
    const { handleSubmit, register, formState, reset } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = (values) => console.log('ФОРМА!', values);

    console.log(formState.errors);

    return (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <TextField
                    {...register('firstName', {
                        validate: (value) => value !== 'admin' || 'Nice try!',
                    })}
                    helperText={formState.errors.firstName && formState.errors.firstName.message}
                    error={!!formState.errors.firstName}
                    fullWidth
                    name="firstName"
                    label="Имя"
                    variant="standard"
                />
                <TextField
                    {...register('lastName', {
                        required: 'Это обязательное поле!',
                    })}
                    helperText={formState.errors.lastName && formState.errors.lastName.message}
                    error={!!formState.errors.lastName}
                    fullWidth
                    name="lastName"
                    label="Фамилия"
                    variant="standard"
                />
            </div>
            <div className="row">
                <TextField
                    {...register('email', {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                            message: 'Это неверная почта!',
                        },
                    })}
                    helperText={formState.errors.email && formState.errors.email.message}
                    error={!!formState.errors.email}
                    name="email"
                    label="E-Mail"
                    defaultValue=""
                    fullWidth
                    variant="standard"
                />
                <TextField
                    {...register('password', {
                        required: 'Это обязательное поле!',
                    })}
                    helperText={formState.errors.password && formState.errors.password.message}
                    error={!!formState.errors.password}
                    name="password"
                    type="password"
                    label="Пароль"
                    fullWidth
                    variant="standard"
                />
            </div>
            <div className="row">
                <TextField name="about" label="Обо мне" fullWidth variant="standard" />
            </div>
            <br />
            <div className="row">
                <Button type="submit" variant="contained" color="primary">
                    Зарегистрироваться
                </Button>
                <Button onClick={() => reset()} variant="contained" color="secondary">
                    Очистить
                </Button>
            </div>
        </form>
    );
}

export default App;
