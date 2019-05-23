import React from 'react';
import { BrowserRouter, Route, Router,  Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';


const PageOne = () => {
    return (
        <div>
            <Link to="/pagetwo">Navigate to page two</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            <button>Click me!</button>
            <Link to="/">Navigate to page one</Link>
        </div>
    );
};


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
                <Route path="/streams/show" exact component={StreamShow} />
            </div>
            </Router>
        </div>
    );
};


export default App;