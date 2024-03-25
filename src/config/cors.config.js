const whitelist = [
  '*'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (
      !origin ||
      whitelist.indexOf(origin) !== -1 ||
      whitelist.includes('*')
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

export { corsOptions };
