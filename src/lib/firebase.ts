import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  projectId: 'parfum-lgance',
  appId: '1:230151220464:web:4a5dfdc2387d7573a8e635',
  storageBucket: 'parfum-lgance.firebasestorage.app',
  apiKey: 'AIzaSyDSu9OtIcYl_n8Gm64w8CBPVNuLReYwx0Y',
  authDomain: 'parfum-lgance.firebaseapp.com',
  messagingSenderId: '230151220464',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
