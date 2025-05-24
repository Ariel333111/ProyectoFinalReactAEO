import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function Header({ carritoContar }) {
  return (
    <Container>
      <NavBar carritoContar={carritoContar}></NavBar>
    </Container>
  );
}

export default Header;
