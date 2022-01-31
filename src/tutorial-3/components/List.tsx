import React from 'react';
import { Question } from '../questions';

import './List.css';

type ListPropsType = {
    tabs: Question[];
};

const List = ({ tabs }: ListPropsType) => {
    const [activeId, setActiveId] = React.useState<number>(1);

    const toggleActiveTab = (id: number): void => {
        if (activeId === id) {
            setActiveId(0);
            return;
        }
        setActiveId(id);
    };

    return (
        <div id="app">
            <div className="app-container">
                <h1 className="app-title">FAQ</h1>
                <div className="app-tabs">
                    {tabs.map((tab: Question) => (
                        <div className={activeId === tab.id ? 'tab active' : 'tab'} key={tab.id}>
                            <input type="checkbox" />
                            <label onClick={() => toggleActiveTab(tab.id)}>{tab.title}</label>
                            <div className="tab-content">
                                <p>{tab.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;
