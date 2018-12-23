import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    // In ES2015, aero functions automatically bind the value of "this" for all code inside the function
    // if not, this will be undefined
    onFormSubmit = (event) => {
        // keep the browser from trying to submit the form automatically and in the process refreshing the page
        event.preventDefault();
        // Passing submitted data to the parent App component
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search:
                            <input 
                                type="text" 
                                value={this.state.term}
                                onChange={ e => this.setState({ term: e.target.value }) } />
                                {/* Controlled component: React state will control submitted value */}
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;