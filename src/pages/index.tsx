import fetchCombinedSchedule, {
  CombinedSchedule,
} from '../services/fetchCombinedSchedule';

type Props = {
  schedule: CombinedSchedule;
};

const Home = ({ schedule }: Props): JSX.Element => (
  <div className="container px-2 py-2 mx-auto text-lg text-center">
    {
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
        {Object.entries(schedule).map(([date, hours]) => (
          <div key={date}>
            <div>{date}</div>
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="w-1/3 px-2 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Time
                  </th>
                  <th className="w-2/3 px-2 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Courts Available
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(hours).map(([hour, courts]) => (
                  <tr
                    key={hour}
                    className={`text-gray-600 text-center uppercase text-xs font-semibold tracking-wider border-b-2 border-gray-200`}
                  >
                    <th className="w-1/3 px-2 py-3 ">{hour}</th>
                    <th className="w-2/3 px-2 py-3 ">{courts.join(' ')}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    }
  </div>
);

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  const schedule = await fetchCombinedSchedule();

  return { props: { schedule } };
};

export default Home;
