module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2b1a178aa783547eafbbceff9e07846'),
  },
});
