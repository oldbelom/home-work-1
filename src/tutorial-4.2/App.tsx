import React from 'react';
import './App.css';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';
import { adjectivesArr, nounsArr } from './words';

export default function App() {
    const [phrase, setPhrase] = React.useState<string[]>([]);

    const getRandomArrayEl = (array: unknown[]) => {
        const randomEl = Math.floor(Math.random() * array.length);
        return array[randomEl];
    };

    const handleAddClick = () => {
        const adjective = getRandomArrayEl(adjectivesArr);
        const noun = getRandomArrayEl(nounsArr);
        const newPhrase = `${adjective} ${noun}`;

        setPhrase((prev) => [newPhrase, ...prev]);
    };

    const handleClearClick = () => {
        setPhrase([]);
    };

    return (
        <div className="wrapper">
            {phrase.length ? (
                <div className="list">
                    {phrase.map((item, index) => (
                        <Phrase key={index} text={item} />
                    ))}
                </div>
            ) : (
                <EmptyBlock />
            )}
            <button onClick={handleAddClick} className="btn btn-generate">
                Сгенерировать
            </button>
            <button onClick={handleClearClick} className="btn btn-clear">
                Очистить
            </button>
        </div>
    );
}
