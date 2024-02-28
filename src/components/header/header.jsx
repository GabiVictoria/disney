import React from "react"
import "./header.css"
import logo from "../../assets/logo.png"
function Header() {
    return (
        <header>
            <img src={logo} alt="" />
            <div>
                <h1> Os segredos da fantasia</h1>
                <h2> Histórias de curiosidades da Disney toda semana!</h2>
            </div>

        </header>
    )
}

export default Header