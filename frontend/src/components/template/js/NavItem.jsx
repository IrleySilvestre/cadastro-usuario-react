import '../css/NavItem.css'
import React from "react"

// import Accordion from 'react-bootstrap/Accordion'
// import {Card} from "react-bootstrap";

export const NavItem = props=>
    <div className="itemNav">
        <a href="/" className="fa fa-line-chart">  Início</a>
        <a href="/" className="fa fa-user-o"> Usuários</a>
    </div>
    // <Accordion defaultActiveKey="0">
    //     <Card>
    //         <Accordion.Toggle as={Card.Header} eventKey="0" className="menu-item">
    //             Usuarios
    //         </Accordion.Toggle>
    //         <Accordion.Collapse eventKey="0">
    //             <Card.Body>
    //                 Seria Aqui
    //             </Card.Body>
    //         </Accordion.Collapse>
    //     </Card>
    //     <Card>
    //         <Accordion.Toggle as={Card.Header} eventKey="1">
    //             Infracoes
    //         </Accordion.Toggle>
    //         <Accordion.Collapse eventKey="1">
    //             <Card.Body>Hello! I'm another body</Card.Body>
    //         </Accordion.Collapse>
    //     </Card>
    // </Accordion>
