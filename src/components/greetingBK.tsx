import * as React from 'react';
import * as PropTypes from 'prop-types';

//import * as App from './app';
// import App from './app';

function greetingBK(props: any): any {
  return <div>Hi {props.name}</div>;
}

greetingBK.propTypes = {
  name: PropTypes.string.isRequired,
};

export default greetingBK;
