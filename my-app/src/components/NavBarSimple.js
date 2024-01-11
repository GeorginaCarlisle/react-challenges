import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: "Hello, guest!",
            buttonText: "Login",
        };
    }

    handleLogin() {
        this.setState((prevState) =>{
            return {
                greeting: prevState.greeting === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "Login" ? "Logout" : "Login",
            }
        }, () =>{
            console.log("Handle Login correctly called");
            let newState = this.state.buttonText === "Logout" ? "Logged in" : "Logged out";
            console.log("new state", newState);
        });
    }

    render() {
        return (
            <nav className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.greeting}</span>
                    <button onClick={() => this.handleLogin()}>{this.state.buttonText}</button>
                </div>
            </nav>
        )
    }
}

    

export default NavBarSimple;