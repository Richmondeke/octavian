"use client";

import { useState, useEffect } from "react";
import { 
  collection, 
  query, 
  onSnapshot, 
  DocumentData,
  QueryConstraint
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export function useFirestoreCollection<T = DocumentData>(
  collectionName: string, 
  constraints: QueryConstraint[] = []
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, collectionName), ...constraints);
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results: T[] = [];
      snapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() } as T);
      });
      setData(results);
      setLoading(false);
    }, (err) => {
      console.error(`Error fetching collection ${collectionName}:`, err);
      setError(err);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { data, loading, error };
}
