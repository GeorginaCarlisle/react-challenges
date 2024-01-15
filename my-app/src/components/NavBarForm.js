import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css";
import NavBarChild from './NavBarChild';

export class NavBarForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: false
        }
    }

    handleClick() {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false : true
            }), () => console.log(this.state.isLoggedIn))
    }

    render() {
        return (
            <div className={css.NavBar}>
                {this.state.isLoggedIn ? 
                    <NavBarChild handleClick={this.handleClick}/>
                    :
                    <button onClick={() => this.handleClick()}>Login</button>
                }
                
            </div>
        )
    }
}

export default NavBarForm