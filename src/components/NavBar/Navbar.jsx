import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

//let classesNew = `${classes.item} ${classes.active}`
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}



const Navbar = () => {
  return (
  <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/users" activeClassName={classes.active}>
            Users
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/gallery" activeClassName={classes.active}>
          Gallery
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/news" activeClassName={classes.active}>
            News
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/music" activeClassName={classes.active}>
            Music
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/settings" activeClassName={classes.active}>
            Settings
          </NavLink>
        </li>
        <li className={classes.item}>
          <Clock />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
