import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component 
{
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);
    }

    /**
     * @param {MouseEvent} e 
     * @param {string} icon
     * @param {string} text
     * 
     * @return {void} 
     */
    callback(e, icon, text) 
    {
        console.clear();
        console.info(icon, text);
        alert(`${icon}\n${text}`);
    }

    render() {
        return (
            <p>1</p>
        );
    }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);