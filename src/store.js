import { v4 as uuidv4 } from 'uuid';

export const muscles = [
  'shoulders',
  'arms',
  'chest',
  'back',
  'legs',
  'abdomen'
];

export const exercises = [
  {
    id: uuidv4(),
    title: 'Overhead Press',
    description: 'Delts exercise...',
    muscles: 'shoulders'
  },
  {
    id: uuidv4(),
    title: 'Front Raise',
    description: 'Front Raise...',
    muscles: 'shoulders'
  },
  {
    id: uuidv4(),
    title: 'Dips',
    description: 'Triceps exercise...',
    muscles: 'arms'
  },
  {
    id: uuidv4(),
    title: 'Barbell Curls',
    description: 'Biceps exercise...',
    muscles: 'arms'
  },
  {
    id: uuidv4(),
    title: 'Bench Press',
    description: 'Chest exercise...',
    muscles: 'chest'
  },
  {
    id: uuidv4(),
    title: 'Pull Ups',
    description: 'Back and biceps exercise...',
    muscles: 'back'
  },
  {
    id: uuidv4(),
    title: 'Deadlifts',
    description: 'Back and leg exercise...',
    muscles: 'back'
  },
  {
    id: uuidv4(),
    title: 'Squats',
    description: 'Legs exercise...',
    muscles: 'legs'
  },
  {
    id: uuidv4(),
    title: 'Romanian Deadlifts',
    description: 'Legs exercise...',
    muscles: 'legs'
  },
  {
    id: uuidv4(),
    title: 'Walking Lunges',
    description: 'Legs exercise...',
    muscles: 'legs'
  },
  {
    id: uuidv4(),
    title: 'Supine straight-leg',
    description: 'Abdoment exercise...',
    muscles: 'abdomen'
  },
  {
    id: uuidv4(),
    title: 'Hanging bent-leg.',
    description: 'Abdoment exercise...',
    muscles: 'abdomen'
  },
  {
    id: uuidv4(),
    title: 'Supine bent-leg',
    description: 'Abdoment exercise...',
    muscles: 'abdomen'
  },
  {
    id: uuidv4(),
    title: 'Cross knee crunch',
    description: 'Abdoment exercise...',
    muscles: 'abdomen'
  }
];
