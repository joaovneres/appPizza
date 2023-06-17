// biblioteca do firebase
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { Slide, toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgL1hS4-Rz7PkHruWrYxnDxFmYNML_CMo",
  authDomain: "db-pizzaria.firebaseapp.com",
  projectId: "db-pizzaria",
  storageBucket: "db-pizzaria.appspot.com",
  messagingSenderId: "442928207060",
  appId: "1:442928207060:web:76940883549e7df687d741"
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
    toast.success("Criado com sucesso.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  } catch (error) {
    console.error("Erro ao cadastrar o Publishing:", error);
    toast.error("Erro ao criar.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  }
}

async function update(id, object, url) {
  try {
    await db.collection(url).doc(id).update(object);
    toast.success("Atualizado com sucesso.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  } catch (error) {
    console.error("Erro ao atualizar o objeto:", error);
    toast.error("Erro ao atualizar.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  }
}

async function remove(id, url) {
  try {
    await db.collection(url).doc(id).delete();
    toast.success("Item excluído.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  } catch (error) {
    console.error("Erro ao remover o objeto:", error);
    toast.error("Erro ao deletar.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
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
