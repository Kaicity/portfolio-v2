import { Timeline } from '../components/TimeLine';
import { experiences } from '../constant/index';

const Experience = () => {
  return (
    <div className="w-full" id="Experience">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experience;
