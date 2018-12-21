import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// Set default value for props
Loader.defaultProps = {
    message: 'Loading...'
};

export default Loader;