import FbApp from '../../config/FbApp';


export default function Auth(){

}

export const login = async(payload)=>{
    const auth =FbApp.auth();
    return await auth.signInWithEmailAndPassword(payload.email,payload.password).then(response=>{
        console.log(response)
        return response;
    }).catch(err=>{
        console.log(err,'Error')
    })
}