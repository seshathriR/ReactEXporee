/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';


export default class App extends Component {
  render() {
    return (
      <div><RaisedButton label="Default" /></div>
    );
  }
}
*/

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import ReactTooltip from 'react-tooltip';
import DropdownMenu, { NestedDropdownMenu } from 'react-dd-menu';


/*export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
      return (
      <div>
        <Drawer open={true}>
        
          <MenuItem  data-tip="hello world">MenuItemHover 
         <ReactTooltip place="right" type="success" effect="float" data-event-off="click">
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </ReactTooltip></MenuItem>
           
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        
       
        
      </div>
    );
  }
}*/

export default class App extends React.Component {
  state = { isMenuOpen: false,open:false };
 
  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen,open:true });
  }
 
  close = () => {
    this.setState({ isMenuOpen: false });
  };
 
  click = () => {
    console.log('You clicked an item');
  };
 
  render() {
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: <button type="button" onClick={this.toggle}>Click me!</button>,
      align: 'right',
    };
 
    const nestedProps = {
      toggle: <a href="#">Hover me for Nested Menu!</a>,
      animate: true,
        
    };
      const nestedPropsone = {
      toggle: <a href="#">Hover For Secondary menu</a>,
      animate: true,
        
    };
 
    return (
      <DropdownMenu {...menuOptions}>
        <li><a href="#">Example 1</a></li>
        <li><button type="button" onClick={this.click}>Example 2</button></li>
        <li role="separator" className="separator" />
        <NestedDropdownMenu {...nestedProps}>
        <MenuItem anchorOrigin= {"horizontal:left","vertical:bottom"}
targetOrigin= {"horizontal:left","vertical:top"} >
           <Menu >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
       </MenuItem>
        </NestedDropdownMenu>
        <NestedDropdownMenu {...nestedPropsone}>
        <MenuItem anchorOrigin= {"horizontal:left","vertical:bottom"}
targetOrigin= {"horizontal:left","vertical:top"} >
           <Menu >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
       </MenuItem>
        </NestedDropdownMenu>
      </DropdownMenu>
    );
  }
}

