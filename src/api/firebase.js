// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH,
    databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export async function createUser(user){
    const email = user.email
    const password = user.password
    
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('사용자 생성 성공');
      } catch (error) {
        console.error('사용자 생성 오류:', error.code, error.message);
      }
}

export async function login(user){
    console.log("LoginUser: " ,user);
    const email = user.email
    const password = user.password
    try {
        await signInWithEmailAndPassword(auth,email,password)
        console.log('로그인 성공');
    } catch (error) {
        console.error('로그인 실패',error.message);
    }
}

export function logout() {
    signOut(auth)//
    .catch(console.error)
}

export function onUserStateChange(callback) {
    //특정한 컴포넌트에서 사용자가 로그인했을 떄 로그아웃을했을떄 정보가 변경되었을때 
  //유저라는 상태가 변경이될때마다 콜백함수가 호출이된다.
    onAuthStateChanged(auth, async (user) => {
        //사용자가 있는경우 (로그인한 경우)
        callback(user)
    })
}

