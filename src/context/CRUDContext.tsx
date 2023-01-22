import { createContext, useContext, useEffect, useState } from "react";
import { fireStore } from "../services/config";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import { string } from "prop-types";
import { number } from "yup/lib/locale";
import { UserAuth } from "./AuthContext";

const CRUDContext = createContext<any>({});

export function CRUDContextProvider(props: any) {
  const { user } = UserAuth();
  const [vetArray, setVetDataArray] = useState([]);
  const [petArray, setPetDataArray] = useState([]);
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
      id: 0,
      name: "",
      age: 0,
      type: "",
      size: "",
      breed: "",
      weight: "",
    },
  ];

  // Search or create a document
  async function initVetsDocument(docID: string) {
    const docRef = doc(fireStore, `vets/${docID}`);
    const query = await getDoc(docRef);

    // Validates if document exists
    if (query.exists()) {
      const docInfo = query.data();
      return docInfo.crudContent;
    } else {
      await setDoc(docRef, { crudContent: [...vetsData] });
      const query = await getDoc(docRef);
      const docInfo = query.data();
      return docInfo?.crudContent;
    }
  }

  async function initPetsDocument(docID: string) {
    const docRef = doc(fireStore, `pets/${docID}`);
    const query = await getDoc(docRef);

    // Validates if document exists
    if (query.exists()) {
      const docInfo = query.data();
      return docInfo.crudContent;
    } else {
      await setDoc(docRef, { crudContent: [...petsData] });
      const query = await getDoc(docRef);
      const docInfo = query.data();
      return docInfo?.crudContent;
    }
  }

  // Get database info
  async function getDatabase(database:string, docID: string) {
    const docRef = doc(fireStore, `${database}/${docID}`);
    const encrypted = await getDoc(docRef);
    const finalInfo = encrypted?.data()?.crudContent;
    return finalInfo;
  }

  useEffect(() => {
    async function fetchDocument() {
      const fetchData1 = await initVetsDocument(user.email);
      const fetchData2 = await initPetsDocument(user.email);
      setVetDataArray(fetchData1);
      setPetDataArray(fetchData2);
      console.log(fetchData1);
      console.log(fetchData2);
    }

    fetchDocument();
  }, []);

  return (
    <>
      <CRUDContext.Provider value={{ vetArray, petArray, getDatabase }}>
        {props.children}
      </CRUDContext.Provider>
    </>
  );
}

export function CRUD() {
  return useContext(CRUDContext);
}
