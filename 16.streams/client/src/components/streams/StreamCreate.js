import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {

    // We can set error message if an input form touched
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // We can customize what form element we want to show
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} // It takes take all the properties out there and add them as props to the input element.
                    autoComplete="off"    
                />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <form 
                onSubmit={ this.props.handleSubmit(this.onSubmit) }
                className="ui form error">
                <Field 
                    name="title" 
                    component={this.renderInput} // we have to assign this component prop
                    label="Title"/>
                <Field 
                    name="description" 
                    component={this.renderInput} 
                    label="Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// Check validation
const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if(!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, {
    createStream
})(formWrapped);