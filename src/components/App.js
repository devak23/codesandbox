import React, { Component } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises,
    category: ''
  };
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercisesByMuscles, exercise) => {
        const { muscles } = exercise;
        exercisesByMuscles[muscles] = exercisesByMuscles[muscles]
          ? [...exercisesByMuscles[muscles], exercise]
          : [exercise];

        return exercisesByMuscles;
      }, {})
    );
  }

  handleCategorySelection = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelection = (id) => {
    this.setState()
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category } = this.state;
    return (
      <div>
        <Header />
        <Exercises
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelection}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelection}
        />
      </div>
    );
  }
}
