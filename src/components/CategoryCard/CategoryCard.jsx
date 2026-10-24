import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import styles from './CategoryCard.module.css';

function CategoryCard({ nombreCategoria, descripcionCategoria, imagenCategoria, linkCategoria }) {
  return (
    <Card className="bg-dark text-white">
      <Link to={linkCategoria} className={styles.categoryCard}>
        <Card.Img
          src={imagenCategoria}
          style={{ height: "220px", objectFit: "cover" }}
          alt={nombreCategoria}
        />
        <Card.ImgOverlay className={styles.overlay}>
          <Card.Title>{nombreCategoria}</Card.Title>
          <Card.Text>{descripcionCategoria}</Card.Text>
        </Card.ImgOverlay>
      </Link>
    </Card>
  );
}

export default CategoryCard;