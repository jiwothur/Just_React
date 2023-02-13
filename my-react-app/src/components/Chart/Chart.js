import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';
/**
* @author
* @function Chart
**/

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint)=>{
    return dataPoint.value;
  });
  const totalMaximun = Math.max(...dataPointValues);

  return(
    <div className='chart'>
        {props.dataPoints.map((dataPoint)=>{
                return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximun} label={dataPoint.label}/>
            })
        } 
    </div>
    )
 }

 export default Chart; 