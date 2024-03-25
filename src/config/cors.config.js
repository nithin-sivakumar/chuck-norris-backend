const whitelist = [
  'http://localhost:5000',
  'http://localhost:5173',
  'http://localhost',
  'https://chuck-norris-backend.vercel.app',
  'https://chuck-norris-backend-nithin-sivakumars-projects.vercel.app',
  'https://chuck-norris-backend-git-main-nithin-sivakumars-projects.vercel.app'
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
