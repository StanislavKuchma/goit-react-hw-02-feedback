import Feedback from 'components/Feedback/Feedback';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback />
      {/* <Section title=""></Section> */}
      {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
      {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
    </div>
  );
};
