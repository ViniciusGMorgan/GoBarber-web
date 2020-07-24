import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo-purple.svg";

import Notifications from "../Notifications";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber"></img>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications></Notifications>
          <Profile>
            <div>
              <strong>Vinícius Morgan</strong>
              <Link to="/profile">Meu perfil</Link>
              <img src="" alt=""></img>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
