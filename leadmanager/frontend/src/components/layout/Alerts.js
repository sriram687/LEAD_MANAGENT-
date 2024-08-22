import React, { Component, Fragment } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired
    }


    notify = ( msgs ) => toast(msgs);
    componentDidUpdate(prevProps){
        const { error, alert } = this.props;
        if(error !== prevProps.error) {
            if (error.msg.name) this.notify("Name is required");
            if (error.msg.email) this.notify("Email is required");

        }


     }
    render(){
        return <Fragment/>;
    }
}

const mapStateToProps = state => ({
    error: state.errors
});


export default connect(mapStateToProps)(Alerts);