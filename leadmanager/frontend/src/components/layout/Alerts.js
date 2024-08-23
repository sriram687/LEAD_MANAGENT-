import React, { Component, Fragment } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }
    notify = ( msgs ) => toast(msgs);
    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            if (error.msg.name) this.notify(`Name: ${error.msg.name.join()}`);
            if (error.msg.email) this.notify(`Email: ${error.msg.email.join()}`);
            if (error.msg.message) this.notify(`MESSAGE: ${error.msg.message.join()}`);

        }
        if(message !== prevProps.message){
             if(message.addLead){
                this.notify(message.addLead);
            }
            if(message.deleteLead){
                this.notify(message.deleteLead);
            }

        }

     }
    render(){
        return <Fragment/>;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});


export default connect(mapStateToProps)(Alerts);