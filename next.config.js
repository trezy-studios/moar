/* eslint-env node */

// Import variables from .env file.
require('dotenv').config()





module.exports = {
  env: {
    firebaseAPIKey: process.env.FIREBASE_API_KEY,
    firebaseAppID: process.env.FIREBASE_APP_ID,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseDatabaseURL: process.env.FIREBASE_DATABASE_URL,
    firebaseMessagingSenderID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseProjectID: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,

    buildDate: (new Date()).toISOString(),
    nodeVersion: process.version,
  },

  // webpack: (config, data) => {
  //   config.module.rules.unshift({
  //     enforce: 'pre',
  //     exclude: /node_modules/u,
  //     loader: 'eslint-loader',
  //     test: /\.js$/u,
  //   })

  //   return config
  // },
}
