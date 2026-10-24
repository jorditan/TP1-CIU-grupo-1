import { Card, Badge } from "react-bootstrap";
import styles from "./promotionCard.module.css";

function PromotionCard({ logo, banco, descripcion, dias }) {
  return (
    <Card className={styles.card}>
      <Card.Header>
        <img className={styles.img} src={logo} alt={banco} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{banco}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <div>
          <small>Días de promoción:</small>
          <div className={styles.diasContainer}>
            {dias.map((dia) => (
              <Badge bg="success" key={dia}>{dia}</Badge>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PromotionCard;