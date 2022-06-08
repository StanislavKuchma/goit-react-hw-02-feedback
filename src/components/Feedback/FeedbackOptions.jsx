import React from "react";

const FeedbackOptions = ({ onAddGood, onAddNeutral, onAddBad }) => {
    return <>
            <button onClick={onAddGood} className="button">Good</button>
            <button onClick={onAddNeutral} className="button">Neutral</button>
            <button onClick={onAddBad} className="button">Bad</button>
        </>
}
export default FeedbackOptions;