import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

export const getLeads = () => (dispatch, getState) => {
    const token = getState().auth.token;


    if (token) {
        axios.get('/api/leads/', tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: GET_LEADS,
                    payload: res.data
                });
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }
};

export const deleteLead = (id) => (dispatch, getState) => {
const token = getState().auth.token;



    if (token) {

        axios
            .delete(`/api/leads/${id}/`, tokenConfig(getState))
            .then(res => {
                dispatch(createMessage({ deleteLead: "Lead Deleted" }));
                dispatch({
                    type: DELETE_LEAD,
                    payload: id
                });
            }).catch(err => console.log(err));
    }
};


export const addLead = (lead) => (dispatch, getState) => {
    const token = getState().auth.token;


    if (token) {

        axios
            .post("/api/leads/", lead, tokenConfig(getState))
            .then(res => {
                dispatch(createMessage({ addLead: "lead added" }));
                dispatch({
                    type: ADD_LEAD,
                    payload: res.data
                });
            }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    }
};






















