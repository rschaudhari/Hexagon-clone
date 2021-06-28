import FbApp from '../../config/FbApp';



export default function userOnboarding (){

}

export const addUser = async(payload)=>{
    const db = FbApp.firestore();
    const auth =FbApp.auth();
    return await auth.createUserWithEmailAndPassword(payload.email,'pass123').then(response=>{
        db.collection('USERS').doc(payload.email).set(payload)
        console.log(response,'1')
        return response;
    })
}

// export const getAllUsers = ()=>{
//     const db = FbApp.firestore();
//     return db.collection('USERS')
// }