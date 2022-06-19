import React from "react";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return <>
        {options.map(data =>       
            <button key={data}
                style={{
                width: 100,
                height: 50,
                marginRight: 20
                }}
                onClick={()=>onLeaveFeedback({data})} className="button">{data}</button>
      )}     
    </>
}

export default FeedbackOptions;

