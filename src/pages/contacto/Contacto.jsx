import { useState } from "react";

function contacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    function cambiarNombre(e) {
        setNombre(e);
    }

    function cambiarEmail(e) {
        setEmail(e);
    }

    return (
        <form>
            <Label>
                Nombre:
                <input type="name" value={nombre} onChange={cambiarNombre} />
                Email:
                <input type="email" name="" id="" />
                Telefono:
                <input type="tel" />

                Mensaje:
                <input type="" name="" id="" />
            </Label>
            <input type="submit" onClick={""} />
            <button>Confirmar</button>
        </form>

    )

}

export default Contacto;