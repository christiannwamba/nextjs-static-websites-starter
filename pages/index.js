import {
  ReactIcon,
  VueIcon,
  SvelteIcon,
  NextIcon,
  NuxtIcon,
  GatsbyIcon,
} from '../components/Icons';
import SmallCard from '../components/SmallCard';

const Home = () => (
  <div className="home">
    <h1>What Can I Deploy to Static Apps?</h1>
    <div className="card-grid">
      <SmallCard Icon={ReactIcon} title="facebook/react" />
      <SmallCard Icon={VueIcon} title="vuejs/vue" />
      <SmallCard Icon={SvelteIcon} title="sveltejs/svelte" />
      <SmallCard Icon={NextIcon} title="zeit/next.js" />
      <SmallCard Icon={NuxtIcon} title="nuxt/nuxt.js" />
      <SmallCard Icon={GatsbyIcon} title="gatsbyjs/gatsby" />
    </div>
  </div>
);

export default Home;
