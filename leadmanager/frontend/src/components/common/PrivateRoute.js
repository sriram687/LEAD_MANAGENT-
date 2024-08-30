import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element: Component, auth, ...rest }) => {
  const location = useLocation();

  if (auth.isLoading) {
    return <h2>Loading...</h2>;
  }



  return (auth.isAuthenticated === true ) ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );

};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  auth: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
