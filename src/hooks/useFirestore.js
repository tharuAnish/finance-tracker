import { useReducer, useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

// state: its current form
const firestoreReducer = (state, action) => {
  // have different cases based on action.type
  switch (action.type) {
    //if non of the cases match then lets go with default
    default:
      return state
  }
}

export const useFirestore = (collection) => {
  //response: this is the state that represent response that we get back from firestore when req
  //dispatch: dispatch new action to the reducer function
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  //for cleanup function
  const [isCancelled, setIsCancelled] = useState(false)

  // collection to refrence firestore
  const ref = projectFirestore.collection(collection)

  //To add document
  //inside the function we pas the document we want to add
  const addDocument = (doc) => {}

  //To delete document
  //pass the id of the documrnt we want to delete
  const deleteDocument = (id) => {}

  //cleanup function
  // this will fire when the function first mounts
  //never run again because we have empty dependency array
  //whenever we go on a diffrent page it will cancel everything happening hear
  //when we try to update state make sure this value be true
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
  return { addDocument, deleteDocument, response }
}
