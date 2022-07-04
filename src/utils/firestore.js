//cSpell: disable

//2nd attempt. Tried doing it exactly like the professor did. Won't work either.

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaDzWrSIxylHomGeQrkJfz3cXPpmh2ilU",
    authDomain: "frostwing-e2279.firebaseapp.com",
    projectId: "frostwing-e2279",
    storageBucket: "frostwing-e2279.appspot.com",
    messagingSenderId: "184254815854",
    appId: "1:184254815854:web:78d7b76fb3f99111ba107f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);