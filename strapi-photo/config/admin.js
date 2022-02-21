module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3eeaa64d53927af71e7cba6ffcef7dd9'),
  },
});
