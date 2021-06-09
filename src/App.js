import { useFetch } from "./hooks/useFetch";
import { scaleLinear } from "d3-scale";
import { extent, max, min, bin, range } from "d3-array";
import React, { useState } from "react";


const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/Jauerbach650/react-parcel-example-1/main/cbb21.csv"
    );

    const ADJOEextent = extent(data, (d) => {
        return +d.ADJOE;
    });

    const ADJDEextent = extent(data, (d) => {
        return +d.ADJDE;
    });
        
    const size = 500;
    const margin = 40;
    const axisTextAlignmentFactor = 5;
    const barcodeLength = 100;
    const tickLength = 8;

    const yScale = scaleLinear()
        .domain(ADJOEextent)
        .range([size - margin, size - 450]); //unit: pixels

    const yScaleDefense = scaleLinear()
    .domain(ADJDEextent)
    .range([size - margin, margin]); //unit: pixels

    return (
        <div>
            <h1>Assignment 2: Exploratory Data Analysis INFO 474 SP 2021</h1>
            <h2>2021 NCAA Basketball Data</h2>
            <p>{loading && "Loading data!"}</p>
            <div id='plots12'>
                <h3>Barcode Plot: Pac 12 Adjusted Offensive Efficiency vs SEC Adjusted Offensive Efficiency</h3>
                <h4></h4>

                <svg width={size} height={size} style={{ border: "1px solid black" }}>
                    <text 
                        x={barcodeLength} 
                        textAnchor="end"
                        y={size - margin + axisTextAlignmentFactor} 
                        style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                            75
                    </text>
                    <text 
                        x={barcodeLength} 
                        textAnchor="end"
                        y={margin + axisTextAlignmentFactor / 2} 
                        style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                            130
                    </text>

                    <line
                        x1={size / 4 - tickLength} 
                        y1={margin} 
                        x2={size / 4 - tickLength * 2} 
                        y2={margin}
                        stroke={"black"}
                        strokeWidth= {"3"}
                    />

                    <line
                        x1={size / 4 - tickLength}
                        y1={size - margin}
                        x2={size / 4 - tickLength * 2}
                        y2={size - margin}
                        stroke={"black"} 
                        strokeWidth= {"3"}
                    />
                    
                    {data.map((d, index) => {
                        const highlight = d.CONF === "P12";
                        console.log(yScale(d.ADJOE));
                        return (
                            <line
                                key={index} 
                                x1={size / 2}
                                y1={yScale(d.ADJOE)}
                                x2={size / 2 + 80}
                                y2={yScale(d.ADJOE)}
                                stroke={highlight ? "red" : "steelblue"}
                                strokeOpacity={highlight ? 1 : 0.1}
                            />
                        );
                    })}
                </svg>

                <svg width={size} height={size} style={{ border: "1px solid black" }}>
                    <text 
                        x={barcodeLength} 
                        textAnchor="end"
                        y={size - margin + axisTextAlignmentFactor} 
                        style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                            75
                    </text>
                    <text 
                        x={barcodeLength} 
                        textAnchor="end"
                        y={margin + axisTextAlignmentFactor / 2} 
                        style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                            130
                    </text>

                    <line
                        x1={size / 4 - tickLength} 
                        y1={margin} 
                        x2={size / 4 - tickLength * 2} 
                        y2={margin}
                        stroke={"black"}
                        strokeWidth= {"3"}
                    />

                    <line
                        x1={size / 4 - tickLength}
                        y1={size - margin}
                        x2={size / 4 - tickLength * 2}
                        y2={size - margin}
                        stroke={"black"} 
                        strokeWidth= {"3"}
                    />
                    
                    {data.map((measurement, index) => {
                        const highlight = measurement.CONF === "SEC";
                        console.log(yScale(measurement.ADJOE));
                        return (
                            <line
                                key={index} 
                                x1={size / 2}
                                y1={yScale(measurement.ADJOE)}
                                x2={size / 2 + 80}
                                y2={yScale(measurement.ADJOE)}
                                stroke={highlight ? "red" : "steelblue"}
                                strokeOpacity={highlight ? 1 : 0.1}
                            />
                        );
                    })}
                </svg>

            </div>

            <div id='plots34'>
                <h3>Barcode Plot: Big 12 Adjusted Defensive Efficiency vs ACC Adjusted Defensive Efficiency</h3>
                <h4></h4>

                <svg width={size} height={size} style={{ border: "1px solid black" }}>
                    <text 
                        x={barcodeLength} 
                        textAnchor="end"
                        y={size - margin + axisTextAlignmentFactor} 
                        style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                            75
                    </text>
                    <text 
                        x={barcodeLength} 
                        textAnchor="end"
                        y={margin + axisTextAlignmentFactor / 2} 
                        style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                            130
                    </text>

                    <line
                        x1={size / 4 - tickLength} 
                        y1={margin} 
                        x2={size / 4 - tickLength * 2} 
                        y2={margin}
                        stroke={"black"}
                        strokeWidth= {"3"}
                    />

                    <line
                        x1={size / 4 - tickLength}
                        y1={size - margin}
                        x2={size / 4 - tickLength * 2}
                        y2={size - margin}
                        stroke={"black"} 
                        strokeWidth= {"3"}
                    />
                    
                    {data.map((measurement, index) => {
                        const highlight = measurement.CONF === "B12";
                        console.log(yScaleDefense(measurement.ADJDE));
                        return (
                            <line
                                key={index} 
                                x1={size / 2}
                                y1={yScaleDefense(measurement.ADJDE)}
                                x2={size / 2 + 80}
                                y2={yScaleDefense(measurement.ADJDE)}
                                stroke={highlight ? "red" : "steelblue"}
                                strokeOpacity={highlight ? 1 : 0.1}
                            />
                        );
                    })}
                </svg>

                <svg width={size} height={size} style={{ border: "1px solid black" }}>
                    <text 
                        x={barcodeLength} 
                        textAnchor="end"
                        y={size - margin + axisTextAlignmentFactor} 
                        style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                            75
                    </text>
                    <text 
                        x={barcodeLength} 
                        textAnchor="end"
                        y={margin + axisTextAlignmentFactor / 2} 
                        style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                            130
                    </text>

                    <line
                        x1={size / 4 - tickLength} 
                        y1={margin} 
                        x2={size / 4 - tickLength * 2} 
                        y2={margin}
                        stroke={"black"}
                        strokeWidth= {"3"}
                    />

                    <line
                        x1={size / 4 - tickLength}
                        y1={size - margin}
                        x2={size / 4 - tickLength * 2}
                        y2={size - margin}
                        stroke={"black"} 
                        strokeWidth= {"3"}
                    />
                    
                    {data.map((measurement, index) => {
                        const highlight = measurement.CONF === "ACC";
                        console.log(yScaleDefense(measurement.ADJDE));
                        return (
                            <line
                                key={index} 
                                x1={size / 2}
                                y1={yScaleDefense(measurement.ADJDE)}
                                x2={size / 2 + 80}
                                y2={yScaleDefense(measurement.ADJDE)}
                                stroke={highlight ? "red" : "steelblue"}
                                strokeOpacity={highlight ? 1 : 0.1}
                            />
                        );
                    })}
                </svg>

            </div>

            <div id='plots56'>
                <h3>Scatterplot: Adjusted Defensive Efficiency vs Adjusted Defensive Efficiency</h3>
                <h4></h4>

                <svg width={size} height={size} style={{ border: "1px solid black" }}>

                    <line 
                        x1={margin * 2} 
                        y1={margin * 3} 
                        x2={margin * 2} 
                        y2={size - margin * 2}
                        stroke={"black"}
                        stroke-width= {"3"} />
                    <line 
                        x1={margin * 2} 
                        y1={size - margin * 2} 
                        x2={size - margin * 2} 
                        y2={size - margin * 2}
                        stroke={"black"}
                        stroke-width= {"3"} />
                    <text 
                        x={size / 2} 
                        textAnchor="end"
                        y={size - margin * 2 + axisTextAlignmentFactor * 4} 
                        style={{ fontSize: 12, fontFamily: "Gill Sans, sans serif" }}>
                            ADJOE
                    </text>
                    <text 
                        x={margin * 2 - axisTextAlignmentFactor} 
                        textAnchor="end"
                        y={size / 2} 
                        style={{ fontSize: 12, fontFamily: "Gill Sans, sans serif" }}>
                            ADJDE
                    </text>

                    {data.map((measurement, index) => {
                        const highlight = measurement.CONF === "P12"
                        return (
                            <circle 
                                key={index} 
                                cx={300 - measurement.ADJOE} 
                                cy={size - margin - measurement.ADJDE} 
                                r="3" 
                                fill="none"
                                stroke={highlight ? "red" : "steelblue"}
                                strokeOpacity=".2"
                            />
                        );
                    })}
                </svg>

                <svg width={size} height={size} style={{ border: "1px solid black" }}>

                    <line 
                        x1={margin * 2} 
                        y1={margin * 3} 
                        x2={margin * 2} 
                        y2={size - margin * 2}
                        stroke={"black"}
                        stroke-width= {"3"} />
                    <line 
                        x1={margin * 2} 
                        y1={size - margin * 2} 
                        x2={size - margin * 2} 
                        y2={size - margin * 2}
                        stroke={"black"}
                        stroke-width= {"3"} />
                    <text 
                        x={size / 2} 
                        textAnchor="end"
                        y={size - margin * 2 + axisTextAlignmentFactor * 4} 
                        style={{ fontSize: 12, fontFamily: "Gill Sans, sans serif" }}>
                            ADJOE
                    </text>
                    <text 
                        x={margin * 2 - axisTextAlignmentFactor} 
                        textAnchor="end"
                        y={size / 2} 
                        style={{ fontSize: 12, fontFamily: "Gill Sans, sans serif" }}>
                            ADJDE
                    </text>

                    {data.map((measurement, index) => {
                        const highlight = measurement.CONF === "SEC"
                        return (
                            <circle 
                                key={index} 
                                cx={300 - measurement.ADJOE} 
                                cy={size - margin - measurement.ADJDE} 
                                r="3" 
                                fill="none"
                                stroke={highlight ? "red" : "steelblue"}
                                strokeOpacity=".2"
                            />
                        );
                    })}
                </svg>

            </div>

            <div id='plots78'>
                <h3>Scatterplot: Adjusted Defensive Efficiency vs Adjusted Defensive Efficiency</h3>
                <h4></h4>

                <svg width={size} height={size} style={{ border: "1px solid black" }}>

                    <line 
                        x1={margin * 2} 
                        y1={margin * 3} 
                        x2={margin * 2} 
                        y2={size - margin * 2}
                        stroke={"black"}
                        stroke-width= {"3"} />
                    <line 
                        x1={margin * 2} 
                        y1={size - margin * 2} 
                        x2={size - margin * 2} 
                        y2={size - margin * 2}
                        stroke={"black"}
                        stroke-width= {"3"} />
                    <text 
                        x={size / 2} 
                        textAnchor="end"
                        y={size - margin * 2 + axisTextAlignmentFactor * 4} 
                        style={{ fontSize: 12, fontFamily: "Gill Sans, sans serif" }}>
                            ADJOE
                    </text>
                    <text 
                        x={margin * 2 - axisTextAlignmentFactor} 
                        textAnchor="end"
                        y={size / 2} 
                        style={{ fontSize: 12, fontFamily: "Gill Sans, sans serif" }}>
                            ADJDE
                    </text>

                    {data.map((measurement, index) => {
                        const highlight = measurement.CONF === "P12"
                        return (
                            <circle 
                                key={index} 
                                cx={300 - measurement.ADJOE} 
                                cy={size - margin - measurement.ADJDE} 
                                r="3" 
                                fill="none"
                                stroke={highlight ? "red" : "steelblue"}
                                strokeOpacity=".2"
                            />
                        );
                    })}
                </svg>

                <svg width={size} height={size} style={{ border: "1px solid black" }}>

                    <line 
                        x1={margin * 2} 
                        y1={margin * 3} 
                        x2={margin * 2} 
                        y2={size - margin * 2}
                        stroke={"black"}
                        stroke-width= {"3"} />
                    <line 
                        x1={margin * 2} 
                        y1={size - margin * 2} 
                        x2={size - margin * 2} 
                        y2={size - margin * 2}
                        stroke={"black"}
                        stroke-width= {"3"} />
                    <text 
                        x={size / 2} 
                        textAnchor="end"
                        y={size - margin * 2 + axisTextAlignmentFactor * 4} 
                        style={{ fontSize: 12, fontFamily: "Gill Sans, sans serif" }}>
                            ADJOE
                    </text>
                    <text 
                        x={margin * 2 - axisTextAlignmentFactor} 
                        textAnchor="end"
                        y={size / 2} 
                        style={{ fontSize: 12, fontFamily: "Gill Sans, sans serif" }}>
                            ADJDE
                    </text>

                    {data.map((measurement, index) => {
                        const highlight = measurement.CONF === "B10"
                        return (
                            <circle 
                                key={index} 
                                cx={300 - measurement.ADJOE} 
                                cy={size - margin - measurement.ADJDE} 
                                r="3" 
                                fill="none"
                                stroke={highlight ? "red" : "steelblue"}
                                strokeOpacity=".2"
                            />
                        );
                    })}
                </svg>

            </div>
           

            <div>
                <h2>Write-up from Assignment 2</h2>
                <p></p>
                <h2>Peer Feedback</h2>
                <li></li>
                <li></li>
                <li></li>
                <h2>Implemented Feedback</h2>
                <p></p>
            </div>
        </div>
    );
};

export default App;
