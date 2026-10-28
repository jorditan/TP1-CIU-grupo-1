import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function obligatorio(valor, mensaje) {
  return valor.trim() === "" ? mensaje : "";
}

const INITIAL_FORM = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  metodoDeEntrega: "",
  direccion: "",
  codigoPostal: "",
  ciudad: "",
  provincia: "",
  numeroDeTarjeta: "",
  fechaDeVencimiento: "",
  codigoDeSeguridad: "",
  mensaje: "",
};

function FormularioCompra({ onConfirmar }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [intentoEnviar, setIntentoEnviar] = useState(false);

  const hoy = new Date();
  const mesActual = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}`;

  const errors = {
    nombre: obligatorio(formData.nombre, "El nombre es obligatorio."),
    apellido: obligatorio(formData.apellido, "El apellido es obligatorio."),
    email:
      obligatorio(formData.email, "El email es obligatorio.") ||
      (!REGEX_EMAIL.test(formData.email.trim())
        ? "El correo electrónico no es válido"
        : ""),
    telefono:
      obligatorio(formData.telefono, "El teléfono es obligatorio.") ||
      (!/^\d{7,15}$/.test(formData.telefono.trim())
        ? "El teléfono debe tener entre 7 y 15 dígitos, con código de área"
        : ""),
    metodoDeEntrega: obligatorio(
      formData.metodoDeEntrega,
      "El método de entrega es obligatorio.",
    ),
    direccion: obligatorio(formData.direccion, "La dirección es obligatoria."),
    codigoPostal: obligatorio(
      formData.codigoPostal,
      "El código postal es obligatorio.",
    ),
    ciudad: obligatorio(formData.ciudad, "La ciudad es obligatoria."),
    provincia: obligatorio(formData.provincia, "La provincia es obligatoria."),
    numeroDeTarjeta:
      obligatorio(
        formData.numeroDeTarjeta,
        "El número de tarjeta es obligatorio.",
      ) ||
      (!/^\d{16}$/.test(formData.numeroDeTarjeta.trim())
        ? "El número de tarjeta debe tener 16 dígitos"
        : ""),
    fechaDeVencimiento:
      obligatorio(
        formData.fechaDeVencimiento,
        "La fecha de vencimiento es obligatoria.",
      ) ||
      (formData.fechaDeVencimiento < mesActual
        ? "La fecha de vencimiento no puede ser anterior al mes actual"
        : ""),
    codigoDeSeguridad:
      obligatorio(
        formData.codigoDeSeguridad,
        "El código de seguridad es obligatorio.",
      ) ||
      (!/^\d{3}$/.test(formData.codigoDeSeguridad.trim())
        ? "El código de seguridad debe tener 3 dígitos"
        : ""),
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hayErrores = Object.values(errors).some((mensaje) => mensaje !== "");
    if (hayErrores) {
      setIntentoEnviar(true);
      return;
    }

    // Los datos de la tarjeta no salen del formulario: la compra es simulada.
    onConfirmar({
      nombre: formData.nombre.trim(),
      apellido: formData.apellido.trim(),
      email: formData.email.trim(),
    });
    setFormData(INITIAL_FORM);
    setIntentoEnviar(false);
  };

  // Función (no componente) que devuelve un campo de texto con su error.
  // Al llamarla como función, React no remonta el input en cada render
  // y el foco no se pierde mientras se escribe.
  const campo = ({ name, label, type = "text", ...resto }) => (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        isInvalid={intentoEnviar && errors[name] !== ""}
        {...resto}
      />
      <Form.Control.Feedback type="invalid">
        {errors[name]}
      </Form.Control.Feedback>
    </Form.Group>
  );

  return (
    <Form noValidate onSubmit={handleSubmit} aria-label="Finalizar compra">
      <h2 className="h5 mb-3">Datos personales</h2>
      <Row>
        <Col md={6}>
          {campo({
            name: "nombre",
            label: "Nombre *",
            autoComplete: "given-name",
          })}
        </Col>
        <Col md={6}>
          {campo({
            name: "apellido",
            label: "Apellido *",
            autoComplete: "family-name",
          })}
        </Col>
        <Col md={6}>
          {campo({
            name: "email",
            label: "Correo electrónico *",
            type: "email",
            autoComplete: "email",
            placeholder: "nombre@ejemplo.com",
          })}
        </Col>
        <Col md={6}>
          {campo({
            name: "telefono",
            label: "Teléfono *",
            type: "tel",
            autoComplete: "tel",
            maxLength: 15,
          })}
        </Col>
      </Row>

      <h2 className="h5 mb-3 mt-2">Entrega</h2>
      <Form.Group className="mb-3" controlId="metodoDeEntrega">
        <Form.Label>Método de entrega *</Form.Label>
        <Form.Select
          name="metodoDeEntrega"
          value={formData.metodoDeEntrega}
          onChange={handleChange}
          isInvalid={intentoEnviar && errors.metodoDeEntrega !== ""}
        >
          <option value="">Elegí una opción</option>
          <option value="domicilio">Envío a domicilio</option>
          <option value="sucursal">Retiro en sucursal</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.metodoDeEntrega}
        </Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Col md={8}>
          {campo({
            name: "direccion",
            label: "Dirección *",
            autoComplete: "street-address",
          })}
        </Col>
        <Col md={4}>
          {campo({
            name: "codigoPostal",
            label: "Código postal *",
            autoComplete: "postal-code",
          })}
        </Col>
        <Col md={6}>
          {campo({
            name: "ciudad",
            label: "Ciudad *",
            autoComplete: "address-level2",
          })}
        </Col>
        <Col md={6}>
          {campo({
            name: "provincia",
            label: "Provincia *",
            autoComplete: "address-level1",
          })}
        </Col>
      </Row>

      <h2 className="h5 mb-3 mt-2">Pago</h2>
      <Row>
        <Col xs={12}>
          {campo({
            name: "numeroDeTarjeta",
            label: "Número de tarjeta *",
            inputMode: "numeric",
            autoComplete: "cc-number",
            maxLength: 16,
            placeholder: "16 dígitos, sin espacios",
          })}
        </Col>
        <Col sm={6}>
          {campo({
            name: "fechaDeVencimiento",
            label: "Vencimiento *",
            type: "month",
            min: mesActual,
            autoComplete: "cc-exp",
          })}
        </Col>
        <Col sm={6}>
          {campo({
            name: "codigoDeSeguridad",
            label: "Código de seguridad *",
            inputMode: "numeric",
            autoComplete: "cc-csc",
            maxLength: 3,
          })}
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="mensaje">
        <Form.Label>Aclaraciones (opcional)</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          maxLength={500}
          placeholder="Por ejemplo: horario de entrega, piso o departamento"
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Confirmar compra
      </Button>
    </Form>
  );
}

export default FormularioCompra;
