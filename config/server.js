module.exports = ({ env }) => ({
  host: env('HOST', 'herokuapp.com'),
  port: env.int('PORT', 1337),
});
