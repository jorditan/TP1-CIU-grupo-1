import Carousel from 'react-bootstrap/Carousel';
import Styles from './Carrusel.module.css';
import primerImg from '../../assets/carrusel_primerImagen.jpg';
import segundaImg from '../../assets/carrusel_segundaImagen.jpg';
import tercerImg from '../../assets/carrusel_tercerImagen.jpg';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className={Styles.carouselImage} src={primerImg} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className={Styles.carouselImage} src={segundaImg} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={Styles.carouselImage} src={tercerImg} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;