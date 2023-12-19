import { Component } from 'react';
import QuestionData from '../resources/quizQuestion.json';
import { Link } from 'react-router-dom';

export default class Quiz extends Component {


  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      questions: QuestionData,
      attempted: 0,
      score: 0,
    };
  }

  handlePrevious = () => {
    this.setState((prevState) => ({ index: prevState.index - 1 }));
  };

  handleNext = () => {
    this.setState((prevState) => ({ index: prevState.index + 1 }));
  };

  handleQuit = () => {
    const confirm = window.confirm("Are you sure you want to quit?");
    if (confirm) {
      this.setState({ index: 0, attempted: 0, score: 0 });
    }
  };

  checkingAnswer = (answer, option) => {
    if (answer === option) {
      alert("Correct option");
      this.setState((prevState) => ({
        ...prevState,
        attempted: prevState.attempted + 1,
        score: prevState.score + 1,
      }));
    } else {
      alert("Wrong option");
      this.setState((prevState) => ({
        ...prevState,
        attempted: prevState.attempted + 1,
      }));
    }
  };

  render() {
    const { index, questions } = this.state;
    const currentQuestion = questions[index];
    const totalQuestions = questions.length;
    

    return (
      <>
        <div id="quiz">
          <div id='container'>
            <h1>Question</h1>
            <h4>{index + 1} of {totalQuestions}</h4>
            <p>{currentQuestion.question}</p>
              <div className="Options">
                {["A", "B", "C", "D"].map((option, index) => (
                  <div key={index} className={`Option${index + 1}`} onClick={() =>this.checkingAnswer( currentQuestion.answer, currentQuestion[`option${option}`])}>
                    {currentQuestion[`option${option}`]}
                  </div>
                ))}
              </div>
            </div>
            <div id="select">
              <button id="prev" onClick={this.handlePrevious} disabled={index === 0}>
                Previous
              </button>
              <button id="next" onClick={this.handleNext} disabled={index === totalQuestions - 1}>
                Next
              </button>
              <button id="quit" onClick={this.handleQuit}>
                Quit
              </button>
              <Link
            to="/result"
            state={{
              attempted: this.state.attempted,
              correct: this.state.score,
              wrong: this.state.attempted-this.state.score,
            }}>
                <button id="finish">Finish</button>
              </Link>
            </div>
          </div>
      </>
    );
  }
}
