import type { CourtSchedule } from './fetchCombinedSchedule';

const courtSchedules: CourtSchedule[] = [
  {
    'Sun 19/6': [],
    'Mon 20/6': [8, 11],
    'Tue 21/6': [12, 14, 15],
    'Wed 22/6': [13],
    'Thu 23/6': [12, 14],
    'Fri 24/6': [14],
    'Sat 25/6': [19, 20],
  },
  {
    'Sun 19/6': [],
    'Mon 20/6': [8, 9, 10, 11, 12, 15],
    'Tue 21/6': [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    'Wed 22/6': [9, 10, 11, 12, 13, 14, 15, 16, 17],
    'Thu 23/6': [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20],
    'Fri 24/6': [8, 9, 10, 11, 13, 14, 15, 16, 17, 20],
    'Sat 25/6': [9, 10, 13, 15, 16, 17, 18, 19, 20],
  },
  {
    'Sun 19/6': [],
    'Mon 20/6': [12, 14, 15, 16],
    'Tue 21/6': [8, 9, 10, 14, 15, 16],
    'Wed 22/6': [12, 15, 16, 17],
    'Thu 23/6': [9, 10, 12, 13, 14, 15, 16, 17, 20],
    'Fri 24/6': [12, 13, 14, 15, 16, 17, 20],
    'Sat 25/6': [8, 16, 17, 19, 20],
  },
];

export default courtSchedules;