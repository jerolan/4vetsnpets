import { createContext, useContext, useEffect, useState } from "react";
import { fireStore } from "../services/config";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import { string } from "prop-types";
import { number } from "yup/lib/locale";
import { UserAuth } from "./AuthContext";

const CRUDContext = createContext<any>({});

export function CRUDContextProvider(props: any) {
  const { user } = UserAuth();
  const [dataArray, setDataArray] = useState([]);
  const vetsData = [
    {
      id: 1,
      name: "Robert",
      lastName: "Hudson",
      job: "Groomer",
      availability: true,
    },
    {
      id: 2,
      name: "Diane",
      lastName: "Rivers",
      job: "Vet",
      availability: true,
    },
  ];

  const petsData = [
    {
      name: string || null,
      age: number || null,
      weigh: number || null,
      size: number || null,
      breed: string || null,
    },
  ];
  const data = user.rol === "admin" ? [...vetsData] : [...petsData];

  // Search or create a document
  async function initDocument(docID: string) {
    const docRef = doc(fireStore, `users/${docID}`);
    const query = await getDoc(docRef);

    // Validates if document exists
    if (query.exists()) {
      const docInfo = query.data();
      return docInfo.crudContent;
    } else {
      await setDoc(docRef, {crudContent: data});
      const query = await getDoc(docRef);
      const docInfo = query.data();
      return docInfo?.crudContent;
    }
  }

  // Get database info
  async function getDatabase(docID:string) {
    const docRef = doc(fireStore, `users/${docID}`);
    const encrypted = await getDoc(docRef);
    const finalInfo = encrypted?.data()?.crudContent;
    return finalInfo;
  }

  useEffect(() => {
    async function fetchDocument() {
      const fetchData = await initDocument(user.email);
      setDataArray(fetchData);
      console.log(fetchData);
    }

    fetchDocument();
  }, []);

  return (
    <>
      <CRUDContext.Provider value={{dataArray}}>{props.children}</CRUDContext.Provider>
    </>
  );
}

export function CRUD() {
  return useContext(CRUDContext);
}
