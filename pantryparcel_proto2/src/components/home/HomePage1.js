import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Carousel from 'react-bootstrap/Carousel'; // <-- Import Carousel for slider
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import homeBg from '../image/home-bg.jpg';
import home_img_1 from '../image/home-img-1.png';
import home_img_2 from '../image/home-img-2.png';
import home_img_3 from '../image/home-img-3.png';
import banner1 from '../image/banner-1.jpg';
import banner2 from '../image/banner-2.jpg';
import banner3 from '../image/banner-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage1.css'


function HomePage() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const productData = await API.graphql(graphqlOperation(listTodos));
            console.log(productData);

            const productList = productData.data.listTodos.items;
            setProducts(productList);
        } catch (error) {
            console.log('error on fetching products', error);
        }
    }

    const goToShop = () => { // <-- Function to navigate to /shop
        navigate('/shop');
    }

    return (
        <Container fluid className="home-container">
          <Row className="my-5 home-carousel">
            <Col xs={12}>
              <Carousel>
                {[home_img_1, home_img_2, home_img_3].map((imgSrc, index) => (
                  <Carousel.Item key={index} className="carousel-item">
                    <img
                      className="d-block carousel-img"
                      src={imgSrc}
                      alt={`Slide ${index + 1}`}
                    />
                    <Carousel.Caption className="carousel-caption">
                      <h3>Upto 50% off on fresh and organic</h3>
                      <Button variant="outline-primary" onClick={goToShop}>Shop Now</Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
          
          <Row className="banner-row">
            {[banner1, banner2, banner3].map((bannerImg, index) => (
              <Col md={4} key={index} className="banner-col">
                <div className="banner">
                  <img src={bannerImg} alt={`Banner ${index + 1}`} className="banner-img" />
                  <div className="banner-caption">
                    <h3>Upto 50% off</h3>
                    <Button variant="outline-secondary" onClick={goToShop}>Shop Now</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
    export default HomePage;