import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import Progress from './Progres';

const Array = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 60 },
    { name: "May", value: 50 },
    { name: "Jun", value: 50 },
    { name: "Aug", value: 50 },
    { name: "Sep", value: 50 },
    { name: "Oct", value: 50 },
    { name: "Nov", value: 50 },
    { name: "Dec", value: 50 },
];

const BarComponent = () => {
    const [chartHeight, setChartHeight] = useState(320);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let height;
            if (windowWidth >= 1000) height = 320;
            else if (windowWidth >= 700) height = 260;
            else height = 200;
            setChartHeight(height);
        };

        handleResize(); // Call the function once to set initial height

        window.addEventListener('resize', handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener
        };
    }, []);

    return (
        <div className="grid lg:grid-cols-6 grid-cols-1 h-auto gap-2 my-12 ">
            <div className="bar-container bg-white rounded-md border w-auto lg:col-span-4 px-4 shadow-xl">
                <div className="flex flex-row justify-between py-3">
                    <div className='earning'>
                        <h3 className='text-base font-bold font-openSans'>Overview</h3>
                        <p className='text-sm font-normal font-openSans text-gray-600'>Monthly Earning</p>
                    </div>
                    <div className='text-sm text-gray-500'>
                        <select className='bg-slate-100 text-sm rounded-md px-2 py-1 focus:outline-none '>
                            <option className='' value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                            <option value="annual">Annual</option>
                        </select>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={chartHeight}>
                    <BarChart data={Array} barSize={40}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />

                        <Bar dataKey="value" fill="#E6E6FA" radius={[12, 12, 0, 0]} />
                        <Tooltip cursor={{ enableBackground: 'red', strokeWidth: 2, fill: "#5D3FD3", radius: 20, width: 50 }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='bg-white rounded-md border lg:col-span-2 col-span-1 px-4 shadow-xl'>
                <div className="customer-container py-2">
                    <h4 className='font-bold text-lg font-openSans'>Customers</h4>
                    <p className='font-normal text-sm text-gray-500 font-openSans'>Customers that Buy Products</p>
                </div>
                <Progress />
            </div>
        </div>
    );
};

export default BarComponent;
