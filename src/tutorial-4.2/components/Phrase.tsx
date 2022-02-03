import React from 'react';

interface PhraseProps {
    text: string;
}

const Phrase: React.FC<PhraseProps> = ({ text }) => {
    return (
        <div className="block">
            <h3>{text}</h3>
        </div>
    );
};

export default Phrase;
