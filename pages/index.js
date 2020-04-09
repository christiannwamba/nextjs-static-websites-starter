import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projectsSlug } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    <h1>What Can I Deploy to Static Apps?</h1>
    <div className="card-grid">
      {Object.keys(projectsSlug).map((key) => {
        const Icon = projectIcons[key];
        return <SmallCard Icon={Icon} title={key} slug={projectsSlug[key]} />;
      })}
    </div>
  </div>
);

export default Home;
