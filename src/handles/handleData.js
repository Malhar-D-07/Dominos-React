import {
  addDoc,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = (documentName, objectOfDataToBeSubmitted, collectionName) => {
  const collectionRef = collection(firestore, collectionName);
  try {
    setDoc(doc(collectionRef, documentName), objectOfDataToBeSubmitted);
  } catch (err) {
    return new Error("Saving Document Failed");
  }
};

export const handleFetchWithCollectionName = (collectionName) => {
  getDocs(collection(firestore, collectionName)).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  });
};

export const handleFetchWithDocumentName = (collectionName, documentName) => {
  const docRef = doc(firestore, collectionName, documentName);
  const docSnap = getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return new Error("Requested Document does not exist");
  }
};

export default handleSubmit;