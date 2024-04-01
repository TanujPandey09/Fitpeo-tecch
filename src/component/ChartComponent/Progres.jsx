import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Progress = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const slickThickness = {
        id: 'sliceThickness',
        beforeDraw(chart, plugins) {
            let slickThicknessPixel = [280, 295, 345]; // Adjusted thicknesses
            slickThicknessPixel.forEach((thickness, index) => {
                chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thickness) * 100;
            });
        }
    };

    const centerText = {
        id: 'centerText',
        afterDatasetsDraw(chart, args, options) {
            const { ctx, chartArea: { width, height } } = chart;
            ctx.save();
            ctx.font = 'bold 30px Arial';
            ctx.fillStyle = '#000';
            ctx.textAlign = "center";
            ctx.fillText("65%", width / 2, height / 2.2); // Adjusted center position
            ctx.restore();

            ctx.font = 'bold 18px Lato'; // Adjusted font weight
            ctx.fillStyle = '#000';
            ctx.textAlign = "center";
            ctx.fillText("Total New", width / 2, height / 1.85); // Adjusted position
            ctx.fillText("Customers", width / 2, height / 1.6); // Adjusted position
        }
    };

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            options: {
                cutoutPercentage: 70, // Adjust this value to control the size of the white circle
                layout: {
                    padding: 0,
                }
            },
            plugins: [slickThickness, centerText],
            data: {
                datasets: [{
                    data: [
                        25, 45, 45
                    ],
                    backgroundColor: [
                        '#604CE9', '#8E5EE7', '#B174F6'
                    ],
                }],
            }
        });

    }, []);

    return <canvas ref={chartRef} style={{ width: "300px", height: "auto", background: "#fff", borderRadius: "50%", }} />;
};

export default Progress;
