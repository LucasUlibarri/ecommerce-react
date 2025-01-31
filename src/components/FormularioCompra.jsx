import React, { useState } from "react";

function FormularioCompra({ cart, finalizePurchase }) {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.lastName || !formData.email) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert(`Compra realizada por: ${formData.name} ${formData.lastName}`);
        finalizePurchase();
        setFormData({
            name: "",
            lastName: "",
            email: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Apellido</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
        </form>
    );
}

export default FormularioCompra;
