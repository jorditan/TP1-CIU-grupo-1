import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "./Contacto.module.css";

// Las claves coinciden con el atributo name de cada campo del formulario.
const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

function Contacto() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isValidated, setIsValidated] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const isCompleted = Object.values(formData).every((value) => value !== "");

  const errors = {
    name: "El nombre es obligatorio y debe tener como máximo 100 caracteres.",
    email:
      "El correo electrónico es obligatorio y debe tener como máximo 254 caracteres.",
    phone:
      "El teléfono es obligatorio y debe tener entre 7 y 15 dígitos, con código de área.",
    message:
      "El mensaje es obligatorio y debe tener como máximo 2000 caracteres.",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Se saca el error personalizado para permitir corregir y volver a validar.
    event.target.setCustomValidity("");
    setFormData((previous) => ({ ...previous, [name]: value }));
    setIsValidated(false);
    setEnviado(false);
  };

  const handleSubmit = (event) => {
    // Siempre se frena el envío nativo: sin esto el navegador recarga la página.
    event.preventDefault();

    if (event.currentTarget.checkValidity() === false) {
      setIsValidated(true);
      return;
    }

    setFormData(INITIAL_FORM);
    setIsValidated(false);
    setEnviado(true);
  };

  const handleReset = (event) => {
    // También se limpia el estado de React: el reset HTML solo no es suficiente.
    for (const name of Object.keys(INITIAL_FORM)) {
      event.currentTarget.elements.namedItem(name).setCustomValidity("");
    }
    setFormData(INITIAL_FORM);
    setIsValidated(false);
  };

  return (
    <section className={styles.seccion} aria-labelledby="contacto-titulo">
      <h1 id="contacto-titulo" className={styles.titulo}>
        Contactanos
      </h1>
      <p>
        Completá tus datos y contanos en qué podemos ayudarte.{" "}
        <b>Los campos marcados con * son obligatorios</b>.
      </p>

      {/* Form.Group usa controlId para conectar Form.Label con Form.Control.
                autoComplete facilita el llenado y value mantiene los campos controlados. */}
      <Form
        className={styles.formulario}
        noValidate
        validated={isValidated}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <Form.Group className={styles.campo} controlId="nombre">
          <Form.Label>Nombre *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            maxLength={100}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className={styles.campo} controlId="email">
          <Form.Label>Correo electrónico *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            autoComplete="email"
            placeholder="nombre@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            maxLength={254}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className={styles.campo} controlId="telefono">
          <Form.Label>Teléfono </Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            maxLength={30}
            aria-describedby="telefono-ayuda"
          />
          <Form.Text muted id="telefono-ayuda" className={styles.ayuda}>
            Entre 7 y 15 dígitos, con código de área.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className={styles.campo} controlId="mensaje">
          <Form.Label>Mensaje *</Form.Label>
          {/* En un textarea controlado, el texto va en value y la ayuda en placeholder. */}
          <Form.Control
            as="textarea"
            name="message"
            rows={6}
            placeholder="Escribí tu mensaje..."
            value={formData.message}
            onChange={handleChange}
            maxLength={2000}
            aria-describedby="mensaje-ayuda"
            required
          />
          <Form.Text muted id="mensaje-ayuda" className={styles.ayuda}>
            {formData.message.length}/2000 caracteres
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>
        <div className={styles.acciones}>
          <Button
            disabled={!isCompleted}
            className={styles.boton}
            type="submit"
            variant="primary"
          >
            Enviar
          </Button>
        </div>
      </Form>
      {enviado && (
        <Alert variant="success" className="mt-3" role="status">
          ¡Mensaje enviado! Te vamos a responder a la brevedad.
        </Alert>
      )}
      {/* EstructuraPrincipal ya incluye el footer compartido de todas las páginas. */}
    </section>
  );
}

export default Contacto;
