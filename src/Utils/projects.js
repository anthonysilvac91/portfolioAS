import html from '../assets/iconos/html_color.png'
import css from '../assets/iconos/css_color.png'
import ts from '../assets/iconos/ts_color.png'
import js from '../assets/iconos/js_color.png'
import react from '../assets/iconos/react_color.png'
import boostrap from '../assets/iconos/boostrap_color.png'
import tailwind from '../assets/iconos/tailwind_color.png'
import imgProyecto1 from '../assets/Guitar_Cart.png'
import imgProyecto2 from '../assets/Ordenes_Propina.png'
import imgProyecto3 from '../assets/proyecto3.png'

export const projects = [
    {
        title: "Guitar Cart",
        description1: "Proyecto de Ecommerce con carrito funcional. Agregar producto, aumentar y disminuir cantidad de productos, eliminar producto y vaciar carrito ",
        description2: "Realizado con React Vite, Typescript, HTML, CSS, Boostrap ",
        website: "www.google.com",
        urlCode: "www.google.com",
        img: imgProyecto1,
        tech: [
            {skill: react},
            {skill: ts},
            {skill: html},
            {skill: css},
            {skill: boostrap},
            
            
            
        ]

    },
    {
        title: "Gestor de Órdenes y Propinas",
        description1: "Este proyecto es una aplicación web que permite a los usuarios generar órdenes de consumo y seleccionar la propina que desean dejar. La aplicación está diseñada para ser intuitiva y eficiente, brindando una experiencia de usuario fluida y agradable.",
        description2: "Se ha creado un hook personalizado para manejar la lógica de la aplicación y se ha optimizado el rendimiento renderizando componentes específicos para asegurar una experiencia rápida y fluida",
        website: "www.google.com",
        urlCode: "www.google.com",
        img: imgProyecto2,
        tech: [
            {skill: react},
            {skill: ts},
            {skill: tailwind},
            {skill: html}
            
            
        ]

    },
    {
        title: "titulo proyecto 3",
        description1: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        description2: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        website: "www.google.com",
        urlCode: "www.google.com",
        img: imgProyecto3,
        tech: [
            {skill: html},
            {skill: css},
            {skill: js},
            {skill: js}
            
        ]

    }

]