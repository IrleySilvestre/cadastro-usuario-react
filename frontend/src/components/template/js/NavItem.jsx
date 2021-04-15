import '../css/NavItem.css'
import React from "react"
import {Accordion} from "react-bootstrap";

import {Card} from "react-bootstrap";

export const NavItem = () => {
    return (
        <Accordion defaultActiveKey="0" >
            <Card >
                <Accordion.Toggle as={Card.Header} eventKey="0" className="itemNav">
                    Início
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="itemNav">
                        <a href="#/" className="fa fa-line-chart"> Início</a>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="itemNav">
                    Usuários
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="itemNav">
                        <a href="#/users" className="fa fa-users"> Usuários</a>
                        <a href="#/userPerfil" className="fa fa-address-card-o"> Perfil</a>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="itemNav">
                    Infrações
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="itemNav">
                        <a href="#/infracoes" className="fa fa-sticky-note"> Infrações</a>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" className="itemNav">
                    Multas
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body className="itemNav">
                        <a href="#/multas" className="fa fa-id-card"> Multas</a>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>)
}
