import Carousel from 'react-bootstrap/Carousel';
import Styles from './Carrusel.module.css';
import imgAnagrama from '../../assets/carrusel_imagen_anagrama.jpeg';
import imgNovedades from '../../assets/carrusel_libros_novedades.jpg';
import imgUsados from '../../assets/carrusel_libros_usados.jpeg';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className={Styles.carouselImage} src={imgAnagrama} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className={Styles.carouselImage} src={imgNovedades} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={Styles.carouselImage} src={imgUsados} alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;