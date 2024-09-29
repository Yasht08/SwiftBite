const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Ensure the correct path to your Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-project-id>.firebaseio.com", // Replace with your actual Firebase project ID
});

module.exports = admin;
