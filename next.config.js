const withTM = require('next-transpile-modules')(['next-slicezone']);

module.exports = withTM({
  modules: true,
  images: {
    domains: ['images.prismic.io', 'tailwindui.com', 'images.unsplash.com'],
  },
  i18n: {
    locales: ['en-gb', 'fr-fr'],
    defaultLocale: 'en-gb',
  },
});
