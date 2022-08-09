import {firebaseApp, firebaseDb as db} from '../config/firebaseConfig'
import { collection, addDoc, doc, setDoc, getDoc, query, where } from "firebase/firestore";

export async function insertData(docPath: string, data: any): Promise<Boolean> {
    // const userDocRef = doc(db,'userData',)
    // const docSnap = await getDoc(userDocRef);

    // const result = await setDoc(doc(db, "userData", firebaseUser.uid), {
    //     firstName: userData.firstName,
    //     lastName: userData.lastName,
    //     avatarUrl: userData.avatarUrl,
    //     uid: firebaseUser.uid,
    //     email: firebaseUser.email,
        
    // })
    console.log('firestoreFunctions -> insertData -> docPath:', docPath)
    console.log('firestoreFunctions -> insertData -> data:', data)
    try {
        const docRef = doc(db,docPath)
        const result = await setDoc(docRef,data)
        return true
    } catch (err) {
        console.log('firestoreFunctions -> insertData -> ERRO:', err)
        return false
    }
}

// export const 