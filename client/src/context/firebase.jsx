import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: ProcessingInstruction.env.REACT_APP_API_KEY,
    authDomain:ProcessingInstruction.env.REACT_APP_AUTH_DOMAIN ,
    databaseURL: ProcessingInstruction.env.REACT_APP_DATABSE_URL,
    projectId: ProcessingInstruction.env.REACT_APP_PROJECT_ID,
    storageBucket: ProcessingInstruction.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: ProcessingInstruction.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: ProcessingInstruction.env.REACT_APP_APP_ID
  }

  const firebaseApp=initializeApp(firebaseConfig)