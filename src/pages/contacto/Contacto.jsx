import { useState } from "react";
import styles from "./Contacto.module.css";

function contacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [tel, aplicarTelefono] = useState("");
    const [texto, setCheckbox] = useState(false);

    function cambiarNombre(e) {
        setNombre(e.target.name);
    }

    function cambiarEmail(e) {
        if (e.target.email.contains("@")) {
            setEmail(e.target.email);
        }
    }

    return (
        <section className={styles.seccion}>
            <h1 className={styles.titulo}>Asinga tu informacion.</h1>
            <form>
                <Label>
                    Nombre:
                    <input type="name" name="Nombre" id="nombre" value={nombre} onChange={cambiarNombre} />
                </Label>

                <Label>
                    Email:
                    <input type="email" name="Email" id="email" value={email} onChange={cambiarEmail.required} />
                </Label>

                <Label>
                    Telefono:
                    <input type="tel" name="Telefono" id="telefono" onChange={(e) => aplicarTelefono(e.target.tel)} />
                </Label>

                <Label>
                    Mensaje:
                    <input type="checkbox" name="Mensaje" id="mensaje" onChange={(e) => setCheckbox(e.target.checked)} />
                </Label>

                <input type="submit" onClick={"Submit"} />
                <button>Confirmar</button>
            </form>
        </section>

    );

}

export default Contacto;