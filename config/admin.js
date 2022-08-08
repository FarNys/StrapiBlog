module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c6656a08220f65906d8e9486d2c1efff'),
  },
});
