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
      <p>Please leave feedback</p> 
      <button class="button">Good</button>
      <button class="button">Neutral</button>
       <button class="button">Bad</button>
      <p>Statistics</p>
      <div>Good: 4</div>
      <div>Neutral: 3</div>
      <div>Bad: 2</div>
      <div>Total: 1</div>
      <div>Positive feedback: 43%</div>
    </div>
  );
};
