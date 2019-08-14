import React from "react";

const style: any = { stroke: "black", strokeWidth: "4", fillOpacity: "0.0", strokeOpacity: "1.0" };

export const CaneldarIcon: React.SFC = () => {
    return (
        <svg width="60" height="60">
            <rect x="5" y="5" width="45" height="45" style={style} />
            <rect x="5" y="5" width="45" height="10" style={style} />

            <text x="15" y="40" font-size="26" fill="red" style={style}>23</text>
            Sorry, your browser does not support inline SVG.
        </svg>
    )
}


export const DailyTodolistIcon: React.SFC = () => {
    return (
        <svg width="60" height="60">

            <rect x="14" y="6" width="20" height="8" style={style} />

            <rect x="5" y="10" width="40" height="40" style={style} />

            <polyline points="31,26 22,44 16,37" style={style} />





            Sorry, your browser does not support inline SVG.
       </svg>
    )
}


