// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref as databaseRef, set, get, child } from "firebase/database";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytesResumable } from "firebase/storage";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase iniciado');

const database = getDatabase();
const storage = getStorage(app);
const auth = getAuth();

export const uploadData = async (data, path) => {
  let resp = null
  await set(databaseRef(database, path), data)
  .then( () => {
    console.log('Datos subidos correctamente');
    resp = true
  })
  .catch( (err) => {
    console.log(err);
    resp = false
  });
  return resp
}

export const uploadImage = async (image) => {

  if (image) {
    // Create a storage reference from our storage service
    const ref = storageRef(storage, image.name);
    const uploadTask = uploadBytesResumable(ref, image);
    let url = null

    await uploadTask
      .then((snapshot) => {
        console.log('Imagen cargada exitosamente');
      })
      .catch((error) => {
        console.log('Error al cargar la imagen:', error);
      });

    // Upload completed successfully, now we can get the download URL
    await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      url = downloadURL
    });
    if (url != null) {
      return url
    }

  } else {
    console.log('Problema con la imagen recibida');
  }
}

export const loginAdmin = async (mail, pass) => {
  let resp = null
  await signInWithEmailAndPassword(auth, mail, pass)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    resp = true
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    resp = false
  });
  return resp
}

export const isAdminLogin = async () => {
  let resp = false
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      resp = true
      // ...
    } else {
      // User is signed out
      // ...
      resp = false
    }
  });
  return resp
}

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Se cerró sesión correctamente.");
    // Realiza cualquier acción adicional después de cerrar sesión
  } catch (error) {
    console.log("Error al cerrar sesión:", error.message);
  }
}

export const getCourses = (setData) => {
  const dbRef = databaseRef(database);
  get(child(dbRef, `courses/`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      setData(snapshot.val())
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

export const getProjects = (setData) => {
  const dbRef = databaseRef(database);
  get(child(dbRef, `projects/`)).then((snapshot) => {
    if (snapshot.exists()) {
      setData(snapshot.val())
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}


export default { uploadData, uploadImage, isAdminLogin, loginAdmin, logout, getCourses, getProjects };
