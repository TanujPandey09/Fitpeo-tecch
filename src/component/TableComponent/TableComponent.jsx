import React, { useState } from 'react';

// Table Head Component
const TableHead = () => {
    return (
        <thead className="text-sm font-bold text-gray-900 capitalize font-openSans bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='bg-hoverSidebar text-white'>
                <th scope="col" className="p-4 " >
                    Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Stock
                </th>
                <th scope="col" className="px-6 py-3">
                    Stock Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Total Price
                </th>
            </tr>
        </thead>
    );
};

// Table Row Component
const TableRow = ({ productName, stock, stockPrice, totalPrice, description }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border capitalize">
            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                
                <div className="flex items-center flex-wrap">
                    <img className="w-20 h-20 rounded-md" src={productName?.image} alt={productName.alt} />
                    <div className="lg:px-3 ">
                        <div className="text-base font-semibold">{productName?.name}</div>
                        <div className="font-normal text-gray-500">{description}</div>
                    </div>
                </div>
            </th>
            <td className="px-6 py-4" >
                {stock}
            </td>
            <td className="px-6 py-4">
                {stockPrice}$
            </td>
            <td className="px-6 py-4">
                {totalPrice} 
            </td>
        </tr>
    );
};

// Table Component
const Table = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((item) =>
    item.productName.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(item.stock).toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(item.stockPrice).toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(item.totalPrice).toLowerCase().includes(searchQuery.toLowerCase())
);

    return (
        <div className="relative overflow-x-hidden shadow-lg sm:rounded-lg ">
            <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 py-4 px-4 bg-white dark:bg-gray-900">
                <div className="product_header">
                    <h6 className='text-2xl font-openSans font-extrabold'>Product Sell</h6>
                </div>
                <div className='flex md:flex-row flex-col gap-4'>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="table-search" 
                            className="block p-2 ps-10 text-sm text-gray-900  border-gray-300 rounded-lg w-auto bg-gray-50 focus:outline-none  text-violet-900" 
                            placeholder="Search for products" 
                            value={searchQuery} 
                            onChange={handleSearchChange} 
                        />
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Action button</span>
                            Last 30 days
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-h-80 overflow-y-scroll lg:overflow-x-hidden capitalize">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <TableHead />
                    <tbody>
                        {filteredData.map((item, index) => (
                            <TableRow key={index} {...item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
