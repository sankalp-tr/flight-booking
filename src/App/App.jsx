import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../redux/helpers';
import { alertActions } from '../redux/actions';
import { PrivateRoute } from '../routes/components';
import { HomePage } from '../components/HomePage';
import { LoginPage } from '../components/LoginPage';
import { Checkin } from '../components/Checkin';
import { Checkout } from '../components/Checkout';
import { RegisterPage } from '../components/RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-12">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/checkout" component={Checkout}/>
                                <Route path="/login" component={LoginPage} />
                                <Route path="/checkin" component={Checkin} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
