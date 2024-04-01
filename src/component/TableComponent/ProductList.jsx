import React from 'react';
import Table from './TableComponent';

const ProductList = () => {
    // Sample data for products
    const products = [
        {
            productName: { name: 'Abstract 3D', image: 'https://picsum.photos/200', alt: 'random' },

            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi, dolores nesciunt",
            stock: 50,
            stockPrice: 45.99,
            totalPrice: 20
        },
        {
            productName: { name: 'Sarphens Illustration', image: 'https://picsum.photos/200/300', alt: 'Product B Image' },
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi, dolores nesciunt",
            stock: 50,
            stockPrice: 30.5,
            totalPrice: 35
        },

        {
            productName: { name: 'Abstract 3D', image: 'https://picsum.photos/200', alt: 'random' },

            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi, dolores nesciunt",
            stock: 50,
            stockPrice: 45.99,
            totalPrice: 20
        },
        {
            productName: { name: 'Sarphens Illustration', image: 'https://picsum.photos/200/300', alt: 'Product B Image' },
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi, dolores nesciunt",
            stock: 50,
            stockPrice: 30.5,
            totalPrice: 35
        },
         {
            productName: { name: 'Abstract 3D', image: 'https://picsum.photos/200', alt: 'random' },

            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi, dolores nesciunt",
            stock: 50,
            stockPrice: 45.99,
            totalPrice: 20
        },
        {
            productName: { name: 'Sarphens Illustration', image: 'https://picsum.photos/200/300', alt: 'Product B Image' },
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi, dolores nesciunt",
            stock: 50,
            stockPrice: 30.5,
            totalPrice: 35
        },
        // Add more product data as needed
    ];

    return (
        <div className="container mx-auto px-4">
            <Table data={products} />
        </div>
    );
};

export default ProductList;
