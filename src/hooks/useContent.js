import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export function useContent(target) {
  const [content, setContent] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase
    .firestore()
    .collection(target)
    .get()
    .then((snapshot) => {
      const allContent = snapshot.docs.map((contentObj) => ({
        ...contentObj.data(), 
        docID: content.id,
      }))

      setContent(allContent);
    })
    .catch((error) => {
      console.log(error.message);
    })
  }, [content.id, firebase, target])
  return { [target]: content }
}