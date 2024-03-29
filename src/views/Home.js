import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import { selectRoot } from "react-formio";

const Home = class extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const {auth} = this.props;
    return (
      <div>
        <div className="container">
          { auth.authenticated ? (
            <div className="well text-center">
              { (auth.user && auth.user.data) ?
                (
                  <h3>
                    已登录为&nbsp;
                    <strong>{ auth.user.data.email }</strong>
                    !
                  </h3>
                ) : null
              }
            </div>) :
            null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: selectRoot('auth', state)
  }
}

const mapDispatchToProps = () => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
