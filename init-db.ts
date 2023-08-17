
import {COURSES,LESSONS} from './db-data';
import { OneCourse, Titles, OneLesson} from 'db-data-structure';
import {initializeApp} from './node_modules/@firebase/app'
import { getFirestore, collection, getDocs,Firestore,setDoc,addDoc } from './node_modules/@firebase/firestore';

var config = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxx.firebaseapp.com",
  projectId: "xxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxxx",
  appId: "x:xxxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "x-xxxxxxxxxx"
};

console.log("Uploading data to the database with the following config:\n");
console.log(JSON.stringify(config));

const app = initializeApp(config);
const db = getFirestore(app);

main().then(r => console.log('Done.'));

async function uploadData() {
  const courseColl = collection(db, '/courses');
  for (let oneCourse of COURSES) {
    const newCourse = removeId(oneCourse);
    const courseRef = await addDoc(courseColl,oneCourse);
    console.log(`Course ${oneCourse['titles']["description"]} uploaded.` );
  }
}

function removeId(data: any) {
  const newData: any = {...data};
  delete newData.id;
  return newData;
}

export async function main(){
  try {
    console.log('Start main...\n\n');
    await uploadData();
    console.log('\n\nClosing Application...');
    
  }catch (e) {
    console.log('Data upload failed, reason:', e, '\n\n');
  }
}