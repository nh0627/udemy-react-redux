import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    render() {
        return <button className="ui button primary">
            {/* Creating a component called a consumer inside a nested child component */}
            <LanguageContext.Consumer>
                { (value) => value === 'english'? 'Submit' : '제출'}
            </LanguageContext.Consumer>
        </button>
    }
}

export default Button;