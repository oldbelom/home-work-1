import React, { Component } from 'react';

export default class ProfileClass extends Component {
    render() {
        const name = this.props.name.split(' ')[0];

        const registrationDate = this.props.registredAt.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        return (
            <div
                style={{
                    display: 'inline-block',
                    margin: 20,
                    padding: 20,
                    border: '5px solid lightgray',
                    borderRadius: 10,
                }}>
                <p style={{ fontSize: 18, marginBottom: 10, marginTop: 0 }}>
                    Привет, <b>{name}!</b>
                </p>
                <span>Дата регистрации: {registrationDate}</span>
            </div>
        );
    }
}
