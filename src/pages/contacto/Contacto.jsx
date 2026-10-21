import styles from "./Contacto.module.css";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

function contacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhotoChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <section className={styles.seccion}>
            <h1 className={styles.titulo}>Asinga tu informacion.</h1>
            <nav>
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <div>
                        <Label>
                            Nombre:
                            <input type="name" name="Nombre" id="nombre" value={formData.name} onChange={handleChange} required />
                        </Label>
                    </div>

                    <div>
                        <Label>
                            Email:
                            <input type="email" name="Email" id="email" value={formData.email} onChange={handleChange} required />
                        </Label>
                    </div>

                    <div>
                        <Label>
                            Telefono:
                            <input type="tel" name="Telefono" id="telefono" value={formData.phone} onChange={handleChange} required />
                        </Label>
                    </div>

                    <div>
                        <Label>
                            Mensaje:
                            <textarea name="Mensaje" id="mensaje" value={formData.message} onChange={handleChange} required>Escribe tu mensaje...</textarea>
                        </Label>
                    </div>
                    <input type="submit" />
                    <button>Confirmar</button>
                </form>
            </nav>

            <Footer />
        </section>

    );
}

export default contacto;