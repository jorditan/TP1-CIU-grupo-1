import Card from 'react-bootstrap/Card';
import styles from './CategoryCard.module.css';


function CategoryCard({ nombreCategoria, descripcionCategoria }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="/img/ficciones.webp" style={{ height: "220px", objectFit: "cover" }}
        alt={nombreCategoria} />
      <Card.ImgOverlay className={styles.overlay}>
        <Card.Title>{nombreCategoria}</Card.Title>
        <Card.Text>
          {descripcionCategoria}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CategoryCard;