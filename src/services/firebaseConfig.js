import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBQoQ0Hz2b93CGhkUpagU5JHb5s7NK1kgg',
  authDomain: 'pbo-tubes.firebaseapp.com',
  projectId: 'pbo-tubes',
  storageBucket: 'pbo-tubes.firebasestorage.app',
  messagingSenderId: '823118119159',
  appId: '1:823118119159:web:9c3784fdb2f6a628afd3f2',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
