import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Project } from '@/types/project';

export const getProjects = async (): Promise<Project[]> => {
  const querySnapshot = await getDocs(collection(db, 'projects'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
};
