import React from 'react';
import { Menu } from 'semantic-ui-react';
import UserPanel from './UserPanel';
class SidePanel extends React.Component{
  render(){
    return(
      <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: "#ffffff", fontSize: "1.2rem" }}
      >
      <UserPanel />
      </Menu>
    )
  }
}

export default SidePanel;
