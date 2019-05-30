import React from "react";
import Todos from "./components/Todos";

import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => (
    <Navbar expand="sm" variant="light" bg="primary" sticky="top">
        <Container>
            <Navbar.Brand href="#">Todo Cookies</Navbar.Brand>
            <Nav>
                <Nav.Link href="https://github.com/ssebs/react-todo-cookies">
                    Source
                </Nav.Link>
                <Nav.Link href="https://github.com/ssebs/">
                    ssebs's GitHub
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

const Footer = () => (
    <footer
        className="text-center text-primary bg-light p-4 mt-5">
        &copy; 2019 Sebastian Safari
    </footer>
);

const App = () => {
    return (
        <>
            <Header />
            <Container>
                <h1 className="text-center">React Todo Cookies</h1>
                <p className="text-center">
                    This is a basic todo app that will be saved in your
                    browser's "Cookies" (localStorage)
                </p>
                <hr />
                <Todos />
            </Container>
            <Footer />
        </>
    );
};

export default App;
