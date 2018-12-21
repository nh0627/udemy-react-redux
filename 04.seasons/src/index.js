import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './loader';

// App component has code to figure out user's location and month
class App extends React.Component {

    // Constructor is not required!

    state = { lat: null, errorMessage: '' }; // Babel will put this line into Constructor anyways

    componentDidMount() {
        console.log('My component was rendered to the screen');
        
        // Initialize data here(users physical location)
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }), 
            (err) => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it re-rendered!')
    }
    
    render() {
        if ( this.state.errorMessage && !this.state.lat ) {
            return <div> Error : { this.state.errorMessage } </div>
        }
        if ( !this.state.errorMessage && this.state.lat ) {
            return <SeasonDisplay let={this.state.lat} /> // Pass state as props
        }
        return <Loader message="Please accept location request!" />
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);