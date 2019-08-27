import React from "react";

const style: any = { stroke: "white", strokeWidth: "4", fillOpacity: "0.0", strokeOpacity: "1.0" };

const fontStyle: any = { stroke: "black", strokeWidth: "1", fillOpacity: "0.0", strokeOpacity: "1.0" };

export const CaneldarIcon: React.SFC = () => {
    return (
        <svg width="50" height="50">
            <rect x="5" y="10" width="40" height="35" style={style} />
            <rect x="5" y="10" width="40" height="10" style={style} />

          

            <rect x="14" y="7" width="0.1" height="7" style={style} />

            <rect x="24" y="7" width="0.1" height="7" style={style} />
            
            <rect x="34" y="7" width="0.1" height="7" style={style} />

            
            Sorry, your browser does not support inline SVG.
        </svg>
    )
}


export const DailyTodolistIcon: React.SFC = () => {
    return (
        <svg width="40" height="50">

           

            <rect x="5" y="7" width="30" height="38" style={style} />

            <polyline points="31,20 22,20" style={style} />

            <polyline points="31,27 12,27" style={style} />

            <polyline points="31,35 12,35" style={style} />





            Sorry, your browser does not support inline SVG.
       </svg>
    )
}


export const DailyTodolistIcon2: React.SFC = () => {
    const iconHeight = 190
    return (
        <svg height="50" width="40">
  <polygon points="
  5,7 
  5,45 
  35,45
  35,15
  25,7
  "
  style={style} />
  
   <polyline points="
   35,15
   25,15
   25,6
   "
  style={style} />

<polyline points="31,22 22,40 16,33" style={style} />
  
  Sorry, your browser does not support inline SVG.
</svg>
    )
}


export const PlayButton: React.SFC = () => {
    return (
        <svg height="16" width="16">
            <polygon points="0,0 0,16 16,8" />
            Sorry, your browser does not support inline SVG.
        </svg>
    )
}

export const PauseButton: React.SFC = () => {
    return (
        <svg width="16" height="16">
            <polygon points="0,0 0,16 5,16 5,0" />
            <polygon points="11,0 11,16 16,16 16,0" />
            Sorry, your browser does not support inline SVG.
        </svg>
    )
}


