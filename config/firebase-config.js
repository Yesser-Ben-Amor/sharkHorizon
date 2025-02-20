import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js';

const firebaseConfig = {
    apiKey: '<API_KEY>',
    authDomain: '<AUTH_DOMAIN>',
    databaseURL: '<DATABASE_URL>',
    projectId: '<PROJECT_ID>',
    storageBucket: '<STORAGE_BUCKET>',
    messagingSenderId: '<MESSAGING_SENDER_ID>',
    appId: '<APP_ID>'
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
