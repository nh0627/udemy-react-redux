import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    renderSubmit(language) {
        return language === 'english'? 'Submit' : '제출';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                {/* Creating a component called a consumer inside a nested child component */}
                <LanguageContext.Consumer>
                    { ({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }
    render() {
        return (
        <ColorContext.Consumer>
            { (color) => this.renderButton(color)}
        </ColorContext.Consumer>
        );
    }
}

export default Button;