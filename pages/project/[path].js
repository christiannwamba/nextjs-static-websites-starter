import fetch from 'isomorphic-unfetch';
import {
  ReactIcon,
  VueIcon,
  SvelteIcon,
  NextIcon,
  NuxtIcon,
  GatsbyIcon,
  StarIcon,
  WatchIcon,
  BugIcon,
  AzureIcon,
  GithubIcon
} from '../../components/Icons';

const icons = {
  react: ReactIcon,
  vue: VueIcon,
  svelte: SvelteIcon,
  'next.js': NextIcon,
  'nuxt.js': NuxtIcon,
  gatsby: GatsbyIcon,
};

function Project({ project, path }) {
  const Icon = icons[path.split('-')[1]];
  console.log(path);
  return (
    <div className="project">
      <aside>
        <h3>You can deploy...</h3>
        <ul>
          <li>
            <a href="/project/facebook-react">React</a>
          </li>
          <li>
            <a href="/project/vuejs-vue">Vue</a>
          </li>
          <li>
            <a href="/project/sveltejs-svelte">Svelte</a>
          </li>
          <li>
            <a href="/project/zeit-next.js">Next.js</a>
          </li>
          <li>
            <a href="/project/nuxt-nuxt.js">Nuxt</a>
          </li>
          <li>
            <a href="/project/gatsbyjs-gatsby">Gatsby</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </aside>
      <main>
        <div className="card-big">
          <Icon w={249} h={278} />
          <div className="stats">
            <div className="stats-details">
              <div>
                <StarIcon w={18} h={18} />
                <p>{project.stargazers_count}</p>
              </div>
              <p>stars</p>
            </div>
            <div className="stats-details">
              <div>
                <WatchIcon w={18} h={18} />
                <p>{project.watchers_count}</p>
              </div>
              <p>watchers</p>
            </div>
            <div className="stats-details">
              <div>
                <BugIcon w={18} h={18} />
                <p>{project.open_issues}</p>
              </div>
              <p>issues</p>
            </div>
          </div>
          <p className="description">
            {project.description}
          </p>
          <div className="cta">
            <a className="button-azure" href="#">
              <AzureIcon w={24} h={24} />
              Deploy to Azure
            </a>
            <a className="button-github" href={project.html_url} target="_blank">
              <GithubIcon w={24} h={24} />
              Learn more...
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

Project.getInitialProps = async function (context) {
  const { path } = context.query;
  const ghPath = path.split('-').join('/');
  const res = await fetch(`https://api.github.com/repos/${ghPath}`);
  const project = await res.json();

  return { project, path };
};

export default Project;
