
const projects = {
  react: 'facebook/react',
  vue: 'vuejs/vue',
  svelte: 'sveltejs/svelte',
  next: 'zeit/next',
  nuxt: 'nuxt/nuxt',
  gatsby: 'gatsbyjs/gatsby',
};

const projectsSlug = {};

Object.keys(projects).forEach((key) => {
  projectsSlug[key] = projects[key].split('/').join('-');
});



module.exports = { projects, projectsSlug };
