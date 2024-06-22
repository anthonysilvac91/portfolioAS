import html from '../assets/iconos/html_color.png'
import css from '../assets/iconos/css_color.png'
import ts from '../assets/iconos/ts_color.png'
import js from '../assets/iconos/js_color.png'
import react from '../assets/iconos/react_color.png'
import boostrap from '../assets/iconos/boostrap_color.png'
import imgProyecto1 from '../assets/Guitar_Cart.png'
import imgProyecto2 from '../assets/proyecto2.png'
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
        title: "titulo proyecto 2",
        description1: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        description2: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
        website: "www.google.com",
        urlCode: "www.google.com",
        img: imgProyecto2,
        tech: [
            {skill: html},
            {skill: css},
            {skill: js},
            
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