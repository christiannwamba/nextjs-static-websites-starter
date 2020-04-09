import fetch from 'isomorphic-unfetch';
import {
  
  StarIcon,
  WatchIcon,
  BugIcon,
  AzureIcon,
  GithubIcon,
  projectIcons
} from '../../components/Icons';
import { projectsSlug } from '../../utils/projectsData';

function Project({ project, path }) {
  const Icon = projectIcons[path.split('-')[1]];
  console.log(path);
  return (
    <div className="project">
      <aside>
        <h3>You can deploy...</h3>
        <ul>
          {Object.keys(projectsSlug).map((key) => {
            return (
              <li key={key}>
                <a href={`/project/${projectsSlug[key]}`}>{key}</a>
              </li>
            );
          })}

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
          <p className="description">{project.description}</p>
          <div className="cta">
            <a className="button-azure" href="#">
              <AzureIcon w={24} h={24} />
              Deploy to Azure
            </a>
            <a
              className="button-github"
              href={project.html_url}
              target="_blank"
            >
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
  context.res.setHeader('Content-Type', 'text/html')
  const { path } = context.query;
  const ghPath = path.split('-').join('/');
  const res = await fetch(`https://api.github.com/repos/${ghPath}`);
  const project = await res.json();
  return { project, path };
};

export default Project;
