import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

/* This app contains two components: SearchBar and ImageList */
class App extends React.Component{

    state = { images: [] };

    // In ES2015, aero functions automatically bind the value of "this" for all code inside the function.
    // This request is an asynchronous request, it will take some amount of time to get a result from API.
    onSearchSubmit = async (term) => {
        // When we put async/await keyword, it will wait till getting a response from API and we can freely work with it later.
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
};

export default App;