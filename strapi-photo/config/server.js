module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});


//3988972917730148bc93dc6403d9200e6977bf51b2494970ad2c4f5f2ff02d2b9989ea429258a117640dc40f00a675c0c24e4cd249deb658bf0288c5c9777aa5f2fb534e47d5ab831aea3f80f4e689858aa28c38cc8c0042b03f63479473d0050e1f2b0498a8eef6acfe25f6fbcdf9ad0f8dc5061f28f259fc7f045a165349e1