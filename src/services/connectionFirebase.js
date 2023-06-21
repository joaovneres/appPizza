// biblioteca do firebase
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgL1hS4-Rz7PkHruWrYxnDxFmYNML_CMo",
  authDomain: "db-pizzaria.firebaseapp.com",
  projectId: "db-pizzaria",
  storageBucket: "db-pizzaria.appspot.com",
  messagingSenderId: "442928207060",
  appId: "1:442928207060:web:76940883549e7df687d741",
};

if (!firebase.apps.lenght) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const provider = new GoogleAuthProvider();

async function create(url, object) {
  try {
    // Crie um documento com um ID gerado automaticamente
    await db.collection(url).add(object);
    return true;
  } catch (error) {
    console.error("Erro ao cadastrar o Publishing:", error);
  }
}

async function update(id, object, url) {
  try {
    await db.collection(url).doc(id).update(object);
    return true;
  } catch (error) {
    console.error("Erro ao atualizar o objeto:", error);
  }
}

async function remove(id, url) {
  try {
    await db.collection(url).doc(id).delete();
    return true;
  } catch (error) {
    console.error("Erro ao remover o objeto:", error);
  }
}

const list = async (url, setData) => {
  try {
    const snapshot = await db.collection(url).get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setData(list);
  } catch (error) {
    console.error("Erro ao obter a listagem de objetos:", error);
  }
};

export { firebase, provider, create, update, remove, list };
