import {firebaseApp, firebaseDb as db} from '../config/firebaseConfig'
// import { collection, addDoc, doc, setDoc, getDoc, query, where } from "firebase/firestore";
import {getAuth, EmailAuthProvider, GoogleAuthProvider, FacebookAuthProvider, 
    signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, User} from 'firebase/auth'

const auth = getAuth(firebaseApp);

export async function signInGoogle(){
    const provider = new GoogleAuthProvider()
    try {
        const result = await signInWithPopup(auth,provider)
        return result.user
    } catch(err) {
        console.log('firebaseAuthFunctions -> signInGoogle -> ERRO:', err)
        return false
    }
}

export async function signInEmailSenha(email,senha): Promise<User> {
    const provider = new GoogleAuthProvider()
    try {
        const result = await signInWithEmailAndPassword(auth, email, senha)
        return result.user
    } catch(err) {
        console.log('firebaseAuthFunctions -> signInEmailSenha -> ERRO:', err)
        return null
    }
}

export async function signUpEmailSenha(email,senha): Promise<any> {
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email, senha)
        return {user: userCredential.user, erro:null}
    } catch(error) {
        if (error.code == "auth/email-already-in-use") {
            // alert("The email address is already in use");
            return {user: null, erro:'Esse e-mail já está em uso'}
        } else if (error.code == "auth/invalid-email") {
            // alert("The email address is not valid.");
            return {user: null, erro:'E-mail fornecido é inválido'}
        } else if (error.code == "auth/operation-not-allowed") {
            // alert("Operation not allowed.");
            return {user: null, erro:'Operação não permitida'}
        } else if (error.code == "auth/weak-password") {
            return {user: null, erro:'Senha fornecida é fraca demais'}
        }
    }
}

// export async function signIn(provider: 'google' | 'email' | 'facebook', email?, senha?){
//     let providerObj
//     if(provider == 'google') {
//         providerObj = new GoogleAuthProvider()
//     } else if (provider == 'facebook') {
//         providerObj = new FacebookAuthProvider()
//     } else {
//         providerObj = new EmailAuthProvider()
//     }

//     try {
//         const result = await signInWithPopup(auth,providerObj)
//         return true
//     } catch(err) {
//         console.log('firebaseAuthFunctions -> signIn -> ERRO:', err)
//         return false
//     }
// }

// export const 