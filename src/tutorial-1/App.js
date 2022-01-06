import React from 'react'
import ProfileFunc from './components/ProfileFunc'
import ProfileClass from './components/ProfileClass'

export default function App() {
    return (
        <div>
            <ProfileFunc name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
            <ProfileClass name="Пётр Петров" registredAt={new Date(2020, 10, 15)} />
        </div>
    )
}
