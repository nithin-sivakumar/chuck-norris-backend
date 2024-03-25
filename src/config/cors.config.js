const whitelist = [
  'http://localhost:5000',
  'http://localhost:5173',
  'http://localhost'
];
const corsOptions = {
  origin: function (origin, callback) {
    // console.log('Origin:', origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

export { corsOptions };
