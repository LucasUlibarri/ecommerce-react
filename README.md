# 🛍️ eCommerce de Zapatillas con React

Este es un proyecto de eCommerce desarrollado con **React** y **Firestore**, como parte de un curso. Actualmente permite a los usuarios ver productos, agregarlos a un carrito y finalizar la compra. En el futuro, se planea expandir sus funcionalidades.

## 🚀 Tecnologías utilizadas

- **React v20.15.0**
- **React Router** para navegación
- **Firestore** como base de datos
- **CSS interno** para estilos
- **Vercel** para el despliegue

## 📂 Estructura del proyecto

```
/src
  ├── App.jsx
  ├── main.jsx
  ├── app.css
  ├── index.css
  ├── components
  │    ├── CartContext.jsx
  │    ├── CartWidget.jsx
  │    ├── FormularioCompra.jsx
  │    ├── ItemListContainer
  │    │    ├── Item.jsx
  │    │    ├── ItemList.jsx
  │    │    ├── ItemListContainer.jsx
  │    │    ├── styleItems.css
  ├── pages
  │    ├── Carrito.jsx
  │    ├── DetalleProducto.jsx
  │    ├── Error.jsx
  │    ├── Home.jsx
  │    ├── Layout.jsx
  │    ├── Nosotros.jsx
  │    ├── Productos.jsx
```

## 🔧 Instalación y ejecución

Para ejecutar el proyecto localmente:

```bash
git clone https://github.com/tuusuario/ecommerce-react.git
cd ecommerce-react
npm install
npm run dev
```

## 🛒 Funcionalidades

- **Visualización de productos**: Lista de zapatillas obtenidas desde Firestore.
- **Carrito de compras**: Agregar y eliminar productos.
- **Finalización de compra**: Formulario donde el usuario ingresa su nombre, apellido y correo electrónico.
- **Actualización de stock**: Se planea implementar stock dinámico en Firestore.

## 📌 Posibles mejoras

- **Persistencia del carrito**: Implementar localStorage para que el carrito no se borre al recargar la página.
- **Stock dinámico**: Restar automáticamente la cantidad comprada en Firestore al finalizar la compra.
- **Notificaciones mejoradas**: Reemplazar window.alert por SweetAlert o Toastify.
- **Autenticación**: Implementar Firebase Auth para registrar usuarios y permitir compras personalizadas.

## 🚀 Despliegue

Este proyecto está desplegado en Vercel. Puedes verlo funcionando en: [Enlace al despliegue](https://enlace-a-tu-despliegue.vercel.app)

## 📌 Nota:

Este proyecto está en desarrollo y sujeto a mejoras futuras. ¡Cualquier contribución o sugerencia es bienvenida! 😊
