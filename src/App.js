import { useFetch } from "./hooks/useFetch";
import { scaleLinear } from "d3-scale";
import { extent} from "d3-array";
import React from "react";


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
                <p> In this plot, I wanted to see who had the higher Adjusted Offensive Efficiency between the Pac 12 and the SEC.<br></br>
                    On the left, I have highlighted the Adjusted Offensive Efficiency for the Pac 12
                    and highlighted this for the SEC on the right. Looking at this, we can see that <br></br> they are pretty similar,
                    however, the Pac 12 has more higher scores while the SEC has the overall single highest.
                </p>

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
                <p>Through this plot, I wanted to see who had the higher Adjusted Defensive Efficiency between the Big 12 and the ACC.<br></br>
                With the Big 12 on the left and the ACC on the right, it appears that the ACC has more higher scores than the Big 12.
                </p>

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
                <h3>Scatterplot: Pac 12 and SEC Adjusted Defensive Efficiency vs Adjusted Offensive Efficiency</h3>
                <p>Through these next 4 plots, I wanted to see if there was a correlation between Adjusted Defensive Efficiency and Adjusted Offensive Efficiency.<br></br>
                On the left we have data from the Pac 12 and on the right we have data from the SEC. It's hard to see a true correlation between
                these data point for each division, but it appears that there is a positive correlation for both divisions. <br></br>
                When Adjusted Defensive Efficiency goes up, so does the Adjusted Offensive Efficiency for a team, and vice versa.
                </p>

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
                                stroke="red"
                                strokeOpacity= {highlight ? "0.2" : "0"}
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
                                stroke="red"
                                strokeOpacity= {highlight ? "0.2" : "0"}
                            />
                        );
                    })}
                </svg>

            </div>

            <div id='plots78'>
                <h3>Scatterplot: ACC and Big 12 Adjusted Defensive Efficiency vs Adjusted Offensive Efficiency</h3>
                <p>For this scatterplot, the ACC is on the left and the Big 12 is on the right. <br></br>
                After looking at this, it appears that the ACC has a positive correlation between Adjusted Defensive Efficiency
                and Adjusted Offensive Efficiency, while there doesn't seem to be any correlation at all for the Big 12.
                </p>

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
                        const highlight = measurement.CONF === "ACC"
                        return (
                            <circle 
                                key={index} 
                                cx={300 - measurement.ADJOE} 
                                cy={size - margin - measurement.ADJDE} 
                                r="3" 
                                fill="none"
                                stroke="red"
                                strokeOpacity= {highlight ? "0.2" : "0"}
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
                        const highlight = measurement.CONF === "B12"
                        return (
                            <circle 
                                key={index} 
                                cx={300 - measurement.ADJOE} 
                                cy={size - margin - measurement.ADJDE} 
                                r="3" 
                                fill="none"
                                stroke="red"
                                strokeOpacity= {highlight ? "0.2" : "0"}
                            />
                        );
                    })}
                </svg>

            </div>
           

            <div>
                <h2>Write-up</h2>
                <p>For this assignment, I came up with these 3 questions: <br></br>
                Who has a higher Adjusted Offensive Efficiency between the Pac 12 and the SEC?<br></br>
                Who has a higher Adjusted Defensive Efficiency between the Big 12 and the ACC?<br></br>
                Is there a correlation between Adjusted Offensive Efficiency and Adjusted Defensive Efficiency for the teams in these same divisions?<br></br>
                </p>
                <p>To answer these questions, I thought it was appropriate to use a barcode plot for the first 2 questions and a scatterplot to answer the last question.<br></br>
                In terms of the data, I didn't have to clean it as it wasn't too big of a dataset and it had everything I needed. <br></br>
                Furthermore, I utilized d3 to highlight the division I was analyzing in order to make this part easier and more noticeable to the viewers.
                </p>
                <p>
                    Through this project, I learned a lot about d3 and visualizations. First, I learned the importance of highlighting certain data points
                    in your plots to allow for easier viewing for both you and your audience. <br></br>
                    Also, I learned the importance of scaling your y values and how useful this can be. <br></br>
                    Lastly, I learned how useful data visualizations are as a whole and how they can help you and others easily answer important questions.
                </p>
                <h2>Peer Feedback</h2>
                <li>Just show the divisions you are looking at in the scatterplots, there is too much going on</li>
                <li>Increase the barcode size in the first 4 plots</li>
                <li>Add labels to the x and y axes in your scatterplots.</li>
                <h2>Implemented Feedback</h2>
                <p>After receiving this feedback, I changed everything accordingly. I increased the length of the barcodes for easier viewing. <br></br>
                I took out all of the other teams in the scatterplots, except for the ones I was observing. Lastly, I added labels to the x and y axes of the scatterplots.
                </p>
            </div>
        </div>
    );
};

export default App;
