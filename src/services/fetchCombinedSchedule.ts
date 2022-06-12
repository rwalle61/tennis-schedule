import * as cheerio from 'cheerio';
import fetchHtml from './fetchHtml';
// import mockCombinedSchedule from './mockCombinedSchedule';

const baseUrl = 'https://camdenactive.camden.gov.uk/courses/detail';

const courtUrls: Record<number, string> = {
  1: `${baseUrl}/178/kilburn-grange-tennis-court-1/`,
  2: `${baseUrl}/179/kilburn-grange-tennis-court-2/`,
  3: `${baseUrl}/183/kilburn-grange-tennis-court-3/`,
};

type CourtSchedule = Record<string, number[]>;

const fetchCourtSchedule = async (
  courtNumber: number,
): Promise<CourtSchedule> => {
  const url = courtUrls[courtNumber];

  const html = await fetchHtml(url);

  const $ = cheerio.load(html);

  const courtSchedule: CourtSchedule = {};

  $('.timetable-day').map((_dayIndex, dayElement) => {
    const children = $(dayElement).children();

    const date = children.first().text().trim();

    const hours = $(children.last().children())
      .map((_hourIndex, hourElement) => {
        const [hourString, bookOrBooked] = $(hourElement).text().split(' ');
        const hour = parseInt(hourString.split(':')[0], 10);
        const available = bookOrBooked === 'Book';
        return {
          hour,
          available,
        };
      })
      .toArray()
      .filter(({ available }) => available)
      .map(({ hour }) => hour);

    courtSchedule[date] = hours;

    return null;
  });

  return courtSchedule;
};

export type CombinedSchedule = Record<string, Record<number, number[]>>;

const combineSchedules = (
  courtSchedules: CourtSchedule[],
): CombinedSchedule => {
  const combinedSchedule: CombinedSchedule = {};

  courtSchedules.forEach((schedule, index) => {
    Object.entries(schedule).forEach(([date, hours]) => {
      combinedSchedule[date] = combinedSchedule[date] || {};
      hours.forEach((hour) => {
        combinedSchedule[date][hour] = combinedSchedule[date][hour] || [];

        const courtNumber = index + 1;
        combinedSchedule[date][hour].push(courtNumber);
      });
    });
  });

  return combinedSchedule;
};

const fetchCombinedSchedule = async (): Promise<CombinedSchedule> => {
  const courtNumbers = [1, 2, 3];

  const courtSchedules = await Promise.all(
    courtNumbers.map(fetchCourtSchedule),
  );

  const schedule = combineSchedules(courtSchedules);

  // const schedule = mockCombinedSchedule;

  return schedule;
};

export default fetchCombinedSchedule;
