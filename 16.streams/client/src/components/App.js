import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from '../components/streams/StreamCreate';
import StreamList from '../components/streams/StreamList';
import StreamEdit from '../components/streams/StreamEdit';
import StreamShow from '../components/streams/StreamShow';
import StreamDelete from '../components/streams/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/show/:id" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    );
}

export default App;