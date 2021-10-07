import { useEffect, useState } from "react";
import { db } from "./firebase";

export const useFirestore = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const subscribers = db.collection("contents").onSnapshot((snap) => {
      let fetched = snap.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setData(...data, fetched);
    });
    return subscribers;
  }, []);

  const setMessage = async (email, ad, message) => {
    await db.collection("messages").add({ email, ad, message });
  };

  return { data, setMessage };
};
