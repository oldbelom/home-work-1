import React from 'react';
import List from './components/List';
import { tabs } from './questions';

export default function App() {
    return (
        <div>
            <List tabs={tabs} />
        </div>
    );
}
