import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <>
            <p>Statistics</p>
            <div>Good:{good}</div>
            <div>Neutral: {neutral}</div>
            <div>Bad: {bad}</div>
            <div>Total: {total}</div>
        <div>Positive feedback: {positivePercentage }%</div>
    </>
}
export default Statistics;