const data = require('./utils/projectsData');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const { projectsSlug } = data;
    const paths = {
      '/': { page: '/' },
    };

    Object.keys(projectsSlug).forEach((key) => {
      paths[`/project/${projectsSlug[key]}`] = {
        page: '/project/[path]',
        query: { path: projectsSlug[key] },
      };
    });

    return paths;
  },
};
