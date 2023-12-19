import { Link,useLocation } from 'react-router-dom'

function Result() {
  const location = useLocation()
  const {attempted,correct,wrong} = location.state || {};
  return (
    
    <><div id='final'>
        <h2>Result</h2>
         <div id='result-container'>
            <h3>You need more practice!</h3>
            <h1>Your score is {Math.floor((correct / 15) * 100)}%</h1>
            <div id="one">
            <p>Total number of questions attempted</p> 
            <p>15</p>
            </div>
            <div id="two">
            <p>Number of attempted questions </p> 
            <p>{attempted}</p>
            </div>
            <div id="three">
            <p>Number of correct answers</p> 
            <p>{correct}</p>
            </div>
            <div id="four">
            <p>Number of wrong answers</p> 
            <p>{wrong}</p>
            </div>
        </div>
        <div id="choose">
           <Link to="/Quiz"><button id="play-again">Play Again</button></Link>
           <Link to="/Home"><button id="back-to-home">Back to Home</button></Link>
        </div>
      </div>
      </>
  )
}

export default Result
