import React, { useState, useEffect } from 'react';
import InterestSphere from './components/InterestSphere';
import content from '../content.json';

function App() {
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        if (content.sections.interests) {
            setInterests(content.sections.interests.items);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <InterestSphere interests={interests} />
        </div>
    );
}

export default App; 