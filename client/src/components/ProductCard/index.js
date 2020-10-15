// Font Awesome (iconos)
import { faShoppingCart as shopCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row } from 'react-bootstrap';
import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// CSS
import s from '../../styles/ProductCard.module.css';

export default function ProductCard({ name, description, img, price, id, destacado }) {
	// console.log('name: ' + name);
	// console.log('description: ' + description);
	// console.log('img: ' + img);
	// console.log('price: ' + price);
	// console.log('id: ' + id);
	// console.log('destacado: ' + destacado);

	var destacadoText = '';

	if (destacado) {
		destacadoText = '50%';
	}

	return (
		<Card className={`m-2 flex-fill ${s.productCard}`}>
			<Card.Img variant='top' src={`${img}` || `https://picsum.photos/200`} />
			<Card.ImgOverlay
				className={`p-1 d-flex flex-column align-items-end justify-content-between ${s.productCardHeadingContainer}`}
				onClick={() => {
					console.log(`Redireccionando a la pagina del producto ${id}`);
					window.location.href = `/products/product/${id}`;
				}}
			>
				<Card.Text className={`text-center ${s.productCardHeading}`}>{`${destacadoText}`}</Card.Text>
				{/* <FontAwesomeIcon className={`m-2 ${s.productCardShopCartIcon}`} icon={shopCart} size={'1x'} /> */}
			</Card.ImgOverlay>
			<Card.Body className={`p-2 ${s.cont_prin}`}>
				<Card.Title as={Link} to={`/products/product/${id}`} className={`my-1 ${s.productCardTitle}`}>
					{`${name}` || `Product Name`}
				</Card.Title>
				<div className={s.icon}>
							<FontAwesomeIcon icon={faStar} size={'1x'} />
							<FontAwesomeIcon icon={faStar} size={'1x'} />
							<FontAwesomeIcon icon={faStar} size={'1x'} />
							<FontAwesomeIcon icon={faStar} size={'1x'} />
							<FontAwesomeIcon icon={faStar} size={'1x'} />
				</div>
				{/* <Card.Text className={`my-1 ${s.productCardDescription}`}>{`${description}` || `Product Name`} </Card.Text> */}
				<Card.Text className={`my-1 ${s.productCardPrice}`}>{`$ ${price}` || `Product Name`}</Card.Text>
				<Row className={`d-flex justify-content-around ${s.buttons}`}>
					<Button as={Link} to={`/products/product/${id}`} className={`mb-1 ${s.productCardButton}`}>
						Ver Detalles
					</Button>
					<Button as={Link} to={`/products/product/${id}`} className={`mb-1 ${s.productCardButton2}`}>
						Agregar al carrito
					</Button>
				</Row>
			</Card.Body>
		</Card>
	);
}
