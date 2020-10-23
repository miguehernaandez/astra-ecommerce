import React from 'react';

import { Route, Switch , Link } from 'react-router-dom';

import Footer from '../Footer/Footer.jsx';
import Navegacion from '../Navegacion/Navegacion';
import { Accordion, Navbar, Card, Button, Container } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar.js';
import s from '../../styles/faqs.module.css';


var enlacesUser = [
	{ text: 'Catalogo', to: '/products/catalogo' },
	{ text: 'FAQs', to: '/Faqs' },
	{ text: 'Contacto', to: '/' },
	{ text: 'Ayuda', to: '/' },
	{ text: 'ADMIN', to: '/admin' },
];

export default function Faqs(){
  return(
		<div >

	<Navegacion links={enlacesUser} showSearchbar={true} />


		<Container className={`my-5`} >
    <Accordion defaultActiveKey="0">
      {/*pregunta 1*/}
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1" className={s.Pregunta}>
          <h5>¿ Que es Discover ?</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1"  className={s.Respuesta} >
          <Card.Body >Donde por fin encontraras todos los Productos para tu celular que estabas buscando, ademas de algunas cosas para cuidarte de COVID</Card.Body>
        </Accordion.Collapse>
      </Card>
      {/*pregunta 2*/}
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2"  className={s.Pregunta}>
          <h5>¿ Como nacio Discover ?</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2"  className={s.Respuesta}>
          <Card.Body><h6>Porque tenemos hambre</h6></Card.Body>
        </Accordion.Collapse>
      </Card>
      {/*pregunta 3*/}
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3"  className={s.Pregunta}>
          <h5>¿ Puedo ver la tienda sin ser cliente?</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3"  className={s.Respuesta}>
          <Card.Body>Por supuesto, puedes ver los productos, agregarlos a tu carrito, borrarlos, pero cuando vayas a pagar te vamos a pedir loguearte, para asi brindarte un mejor servivcio</Card.Body>
        </Accordion.Collapse>
      </Card>
      {/*pregunta 4*/}
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4"  className={s.Pregunta}>
        <h5>  ¿ Que metodos de pago hay ?</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4"   className={s.Respuesta}>
          <Card.Body>Recibimos mercado pago, Paypal y cabezas de ganado a precio de mercado</Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>
	</Container>

					<Footer></Footer>

</div>

  )
}
