import type { CombinedSchedule } from './fetchCombinedSchedule';

const schedule: CombinedSchedule = {
  'Sun 12/6': { '20': [1] },
  'Mon 13/6': {
    '9': [2],
    '10': [1, 2],
    '11': [1, 2, 3],
    '12': [1, 3],
    '13': [2, 3],
    '14': [2, 3],
    '15': [2],
    '16': [2, 3],
    '19': [2],
    '20': [2, 3],
  },
  'Tue 14/6': {
    '8': [2, 3],
    '9': [2, 3],
    '10': [2, 3],
    '11': [2, 3],
    '12': [1, 2],
    '13': [2],
    '14': [1, 2, 3],
    '15': [1, 2, 3],
    '16': [2],
    '17': [2],
    '20': [2],
  },
  'Wed 15/6': {
    '8': [2],
    '9': [2],
    '10': [2, 3],
    '11': [2, 3],
    '12': [3],
    '13': [1],
    '14': [2],
    '15': [2],
    '16': [2, 3],
    '17': [2, 3],
    '18': [2],
    '20': [2],
  },
  'Thu 16/6': {
    '8': [2, 3],
    '9': [2],
    '10': [2],
    '11': [1, 2, 3],
    '12': [1, 2, 3],
    '13': [2],
    '14': [1, 2],
    '15': [2, 3],
    '16': [2, 3],
    '17': [3],
    '18': [2],
    '20': [2],
  },
  'Fri 17/6': {
    '8': [2, 3],
    '9': [2, 3],
    '12': [2, 3],
    '13': [2, 3],
    '14': [1, 2, 3],
    '15': [2, 3],
    '16': [2],
    '17': [3],
    '19': [1, 2],
    '20': [1, 2],
  },
  'Sat 18/6': {
    '11': [2],
    '12': [2],
    '13': [1, 2],
    '14': [2],
    '15': [2],
    '17': [2],
    '19': [1, 2, 3],
    '20': [1, 2, 3],
  },
};

export default schedule;