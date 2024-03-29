import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth,firestore } from '../Firebase/Firebase';
import { setDoc,doc } from 'firebase/firestore';
import { json } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const useSignUpEmailAndPassword = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const loginUser =  useAuthStore(state => state.login)
  
  const signup = async (inputs) => {
    if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
      console.log("Please fill the fields")
      return
    }
    try {
        const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
        if(!newUser && error ){
          console.log(error)
          return
        }
        if(newUser){
          const userDoc = {
            uid : newUser.user.uid,
            email: inputs.email,
            username: inputs.username,
            fullName: inputs.fullName,
            bio : "",
            profilePicUrl: "",
            followers: [],
            following: [],
            posts: [],
            createdAt: Date.now(),



          }
          await setDoc(doc(firestore,"users",newUser.user.uid),userDoc)
          localStorage.setItem("user-info",JSON.stringify(userDoc))
          loginUser(userDoc)

        }

    }
    catch(error) {
      console.log(error)
    }
  }
  return {
    loading,error, signup

  }
}

export default useSignUpEmailAndPassword
