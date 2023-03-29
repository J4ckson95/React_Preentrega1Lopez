import React from "react"
import Head from "./Head/Head"
import Nav from "./Nav/Nav"
import styled from "./Header.module.css"

const Header = () => {
    return (
        <div className={styled.container}>
            <Head></Head>
            <Nav></Nav>
        </div>
    )
}
export default Header