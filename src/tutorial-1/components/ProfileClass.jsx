import React, { Component } from 'react';

export default class ProfileClass extends Component {
    montoToStr(num) {
        return num > 12 || num < 1
            ? null
            : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(
                  ',',
              )[num];
    }

    getRegistrationDate() {
        return `
            ${this.props.registredAt.getDate()}
            ${this.montoToStr(this.props.registredAt.getMonth())}
            ${this.props.registredAt.getFullYear()}
        `;
    }

    render() {
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
                    Привет, <b>{this.props.name.split(' ')[0]}!</b>
                </p>
                <span>Дата регистрации: {this.getRegistrationDate()}</span>
            </div>
        );
    }
}
