import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "firebase/firestore"

import { app, database } from "~firebase"

const urlDbInstance = collection(database, "bisket_user_url")

export const saveUrl = async (user_email, current_url) => {
  // await setDoc(doc(urlDbInstance, user_email), {
  //   urls: current_url
  // })
  //   await updateDoc(doc(urlDbInstance, user_email), {
  //     urls: arrayUnion(current_url)
  //   })
  //   urlDbInstance.doc(user_email).get()
  //   .then((docSnapshot) => {
  //     if (docSnapshot.exists) {
  //       usersRef.onSnapshot((doc) => {
  //         await updateDoc(doc(urlDbInstance, user_email), {
  //         urls: arrayUnion(current_url)
  //         })
  //       });
  //     } else {
  //         await setDoc(doc(urlDbInstance, user_email), {
  //             urls: current_url
  //         })
  //     }
  // });
}

export const getUrls = (email) => {
  // const [info , setInfo] = useState([]);
  // const docRef = doc(database, "bisket_user_url", 'dhruv.mehra@live.com');
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //     docSnap.forEach(element => {
  //         var data = element.data()
  //         setInfo(arr => [...arr , data]);
  //     })
  //     return(info);
  // } else {
  //     console.log("No such document!");
  // }
  return [1, 2, 3]
}
