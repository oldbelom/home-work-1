import React from 'react';

const ProfileFunc = (props) => {
    const name = props.name.split(' ')[0];

    const date = props.registredAt.getDate();
    const month = props.registredAt.getMonth();
    const year = props.registredAt.getFullYear();

    const registrationDate = `${date} ${montoToStr(month)} ${year}`;

    function montoToStr(num) {
        return num > 12 || num < 1
            ? null
            : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(
                  ',',
              )[num];
    }

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
};

export default ProfileFunc;
