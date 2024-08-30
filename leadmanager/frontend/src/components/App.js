import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import Dashboard from './leads/Dashboard'
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <ToastContainer />
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<PrivateRoute element={Dashboard} />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/login" element={<Login />} />
                            </Routes>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);