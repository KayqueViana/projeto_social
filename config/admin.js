module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8ef4a16bf824279d668bec311a543682'),
  },
});
