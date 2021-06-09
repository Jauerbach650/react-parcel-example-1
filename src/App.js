import { useFetch } from "./hooks/useFetch";
import { scaleLinear } from "d3-scale";
import { extent, max, min, bin, range } from "d3-array";
import React, { useState } from "react";


const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/Jauerbach650/react-parcel-example-1/main/cbb21.csv"
    );

    console.log(data);

    const ADJOEextent = extent(data, (d) => {
        return +d.ADJOE;
    });

    const ADJDEextent = extent(data, (d) => {
        return +d.ADJDE;
    });

    const BARTHAGextent = extent(data, (d) => {
        return +d.BARTHAG;
    });
        
    const size = 500;
    const margin = 50;
    const axisTextAlignmentFactor = 6;
    const barcodeLength = 100;
    const tickLength = 8;
    const numSize = 15;
    // WHAT IS THIS???
    const maxValueOfTMAX = max([1, 2, 3]);

    const yScale = scaleLinear()
        .domain(ADJOEextent)
        .range([size - margin, size - 50]); //unit: pixels

    // const yScaleDefense = scaleLinear()
    // .domain(ADJDEextent)
    // .range([size - margin, margin]); //unit: pixels

    // const yScalePower = scaleLinear()
    // .domain(BARTHAGextent)
    // .range([size - margin, margin]); //unit: pixels
    

    // WHAT IS THIS???

    // _bins = bin().thresholds(15);
    // tmaxBins = _bins(
    //     data.map((d) => {
    //         return + d.SNWD;
    //     })
    // );

    const histogramLeftPadding = 10;

    const [selectedStation, setSelectedStation] = useState(
        "KALISPELL GLACIER AP"
      );

    const [selectedMax, setSelectedMax] = useState(
        "110"
    );

    const [selectedMin, setSelectedMin] = useState(
        "-40"
    );

    console.log(yScale);
    // console.log(yScaleDefense);
    // console.log(yScalePower);

    return (
        <div>
            <h1>Assignment 2: Exploratory Data Analysis INFO 474 SP 2021</h1>
            <h2>2021 NCAA Basketball Data</h2>
            <p>{loading && "Loading data!"}</p>
            <div id='plot1'>
                <h3>Barcode Plot: Pac 12 Teams</h3>
                <h4></h4>

            <svg width={size} height={size} style={{ border: "1px solid black" }}>
                <text 
                    x={barcodeLength} 
                    textAnchor="end"
                    y={size - margin + axisTextAlignmentFactor} 
                    style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                        0
                </text>
                {/* left 37 */}
                <text 
                    x={barcodeLength} 
                    textAnchor="end"
                    y={margin + axisTextAlignmentFactor / 2} 
                    style={{ fontSize: 15, fontFamily: "Gill Sans, sans serif" }}>
                        100
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
                    const highlight = measurement.CONF === "P12"
                    return (
                        <line
                            key={index} 
                            x1={size / 2}
                            y1={yScale(measurement.ADJOE)}
                            x2={size / 2 + 20}
                            y2={yScale(measurement.ADJOE)}
                            stroke={highlight ? "red" : "steelblue"}
                            strokeOpacity={highlight ? 1 : 0.1}
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
