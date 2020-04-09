const data = require('./utils/projectsData');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const { projects } = data;
    const paths = {
      '/': { page: '/' },
    };

    projects.forEach((project) => {
      paths[`/project/${project.slug}`] = {
        page: '/project/[path]',
        query: { path: project.slug },
      };
    });

    return paths;
  },
};
