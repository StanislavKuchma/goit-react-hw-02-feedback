import { render } from "@testing-library/react";
import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";


class Feedback extends React.Component{
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
}
    addGood = () => { 
        let currentGood = this.state.good;
        currentGood++;
        this.setState({
            good: currentGood
        });
    }
    addNeutral = () => {
        let currentNeutral = this.state.neutral;
        currentNeutral++;
        this.setState({
            neutral: currentNeutral
        });
    }
    addBad = () => {
        let currentBad = this.state.bad;
        currentBad++;
        this.setState({
            bad: currentBad
        });
    }     
    countTotalFeedback = () => {
        let total = this.state.good + this.state.neutral + this.state.bad
                    return total
    
    }

    // countPositiveFeedbackPercentage =()=>{}

render(){
    return (
        <>
            <Section title="Please leave feedback"/>
            <FeedbackOptions
                onAddGood={this.addGood}
                onAddNeutral={this.addNeutral}
                onAddBad={this.addBad} />
            <Notification message="There is no feedback"/>
            < Statistics 
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={0}
                positivePercentage={0} />
        </>
    )

}
}

export default Feedback;