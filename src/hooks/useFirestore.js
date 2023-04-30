import { useReducer, useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        ...state,
        isPending: true,
        document: null,
        success: false,
        error: null,
      }
    case "ADDED_DOCUMENT":
      return {
        ...state,
        isPending: false,
        document: action.payLoad,
        success: true,
        error: null,
      }
    case "ERROR":
      return {
        ...state,
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection to refrence firestore
  const ref = projectFirestore.collection(collection)

  //only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  //To add document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" })
    try {
      const addedDocument = await ref.add(doc)
      dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payLoad: addedDocument })
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message })
    }
  }

  //To delete document
  const deleteDocument = async (id) => {}

  //cleanup function
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
  return { addDocument, deleteDocument, response }
}
