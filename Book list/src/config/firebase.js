import 'firebase/app';
import 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyDF2S68ks4jpQROpVHfJPNfvUpPUsh1Nus',
  authDomain: 'booklist-app-342b8.firebaseapp.com',
  projectId: 'booklist-app-342b8',
  storageBucket: 'booklist-app-342b8.appspot.com',
  messagingSenderId: '874887901983',
  appId: '1:874887901983:web:adcaadd9196eedd9b5362a',
});

const fs = getFirestore(firebaseConfig);
export default fs;
