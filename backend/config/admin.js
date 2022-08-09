module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4d6e83cb11f563beb5ce5421a3e89b4e'),
  },
});
