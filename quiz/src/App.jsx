/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/project-react-quiz-app-three-boilerplate" element={<Home />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Result" element={<Result />} />
        </Routes>

      </>
    );
  }
}
