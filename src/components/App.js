import React, { Component } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises,
    category: '',
    exercise: {}
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

  handleExerciseSelection = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    return (
      <div>
        <Header />
        <Exercises
          exercise={exercise}
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
