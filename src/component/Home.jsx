import React from 'react'
import { Header } from './Header'
import Status from './Status'

import ProductList from './TableComponent/ProductList'

import ChartComponent from './ChartComponent/Index'


const Home = () => {
    return (
        <>
            <Header />
            <Status />
            <ChartComponent/>
            <ProductList/>
        </>
    )
}

export default Home