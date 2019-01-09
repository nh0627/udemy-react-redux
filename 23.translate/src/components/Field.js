import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    // Hook up a context object to this class component
    // It should be called "contextType" exactly
    static contextType = LanguageContext; 

    render() {
        // Upon context, the text will be changed!
        const text = this.context.language === 'english' ? 'Name' : '이름';
        return (
            <div className="ui field">
                <label>{ text }:</label>
                <input />
            </div>
        );
    }
}

export default Field;