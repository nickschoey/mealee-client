/**
 *
 * TopBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout, Icon } from 'antd';
import './index.css';
import 'antd/dist/antd.css';

const { Header } = Layout;
/* eslint-disable react/prefer-stateless-function */
class TopBar extends React.Component {
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="topbar">
          <div className="topbar__logo">Mealee</div>
          <div className="topbar__options">
            <Icon type="user" />
          </div>
        </div>
      </Header>
    );
  }
}

TopBar.propTypes = {};

export default TopBar;
