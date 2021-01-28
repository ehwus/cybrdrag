import * as React from 'react';

const minutesToNextHour = () => {
  return 60 - new Date().getMinutes();
};

const CountdownToNextPerformance = () => {
  const [counter, setCounter] = React.useState(minutesToNextHour());

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 60000);
  }, [counter]);

  return (
    <div className='countdown'>
      <div>NEXT PERFORMANCE IN {counter} MINUTES!</div>
    </div>
  );
};

export default CountdownToNextPerformance;
