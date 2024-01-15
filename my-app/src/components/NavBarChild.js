import React from 'react'

function NavBarChild(props) {
    return (
        <form>
            <label htmlFor='username'>Username:</label>
            <input type="text" id="username" placeholder='username' />

            <label htmlFor='password'>Password:</label>
            <input type="password" id="password" placeholder='password' />

            <input type="submit" value="Submit" onClick={props.handleClick} />
        </form>
    )
}

export default NavBarChild