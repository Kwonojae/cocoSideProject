// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { child, get, getDatabase, ref, remove, set, update } from 'firebase/database'
import {v4 as uuid} from 'uuid'


/**
 * .env API KEY import
 */
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH,
    databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app);

/**
 * @FireBase Auth
 * @createUserWithEmailAndPassword API 
 * @param {*} user 
 */
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
/**
 * @FireBase AUTH
 * @LOGIN
 * signInWithEmailAndPassword API 
 * @param {*} user 
 */
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

/**
 * @FIREBASE
 * @LogOut
 * signOut API
 */
export function logout() {
    signOut(auth)//
    .catch(console.error)
}

/**
 * 특정한 컴포넌트에서 사용자가 로그인했을 떄 로그아웃을했을떄 정보가 변경되었을때 
 * 유저라는 상태가 변경이될때마다 콜백함수가 호출이된다.
 * callback 사용자가 있는경우 (로그인한 경우)
 * @param {*} callback 
 */
export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
        callback(user)
    })
}

/**
 * @SET
 * @UserCeoInfoListUpdate 
 * - 제거 pareInt 로 넣을시 문자열에서 정수로 변환과정시 - 이 있으면 제대로 이루어지지 않는 현상이 있다.
 * 기본 유저와 CEO 유저의 구분 company가 있고 없고로 구현한다.
 * @param {*} ceoInfo 
 * @returns 
 */
export async function addNewUserCeo(ceoInfo) {
    const id = uuid()
    const phoneNumber = ceoInfo.phone.replace(/-/g, '');
    const {
        first_name,
        last_name,
        company,
        website,
        email,
        password,
        confirm_password,
      } = ceoInfo;
    
    return set(ref(db,`userCeo/${id}`),{
        ...ceoInfo,
        id,
        first_name,
        last_name,
        company,
        phone:parseInt(phoneNumber),
        website,
        email,
        password:parseInt(password),
        confirm_password:parseInt(confirm_password),
    })
}
/**
 * @Get
 * @MyPageUserCeoProFile
 * firebase에 회원가입한 유저의 정보를 가져오려는데 UID는 나오지만 해당 유저의 데이터베이스에 저장되는 정보는 포함이 안되어 있어서 
 * UID로는 정보를 못가져오고 데이터베이스에 저장된 email의 값과 현재 로그인한 유저의 UID의 EMAIL을 비교하여 정보를 가져온다. 
 * @returns ;
 */
export async function getCeoProfile() {
    const currentuser = auth.currentUser
    const userEmail = currentuser.email;
    try {
        const snapshot = await get(ref(db, 'userCeo'));

        if (snapshot.exists()) {
            const userCeo = snapshot.val();
            // userCeo 객체를 배열로 변환하여 사용자 이메일과 비교
            const userCeoArray = Object.values(userCeo);
            const matchedUser = userCeoArray.find(ceo => ceo.email === userEmail);

            if (matchedUser) {
                return matchedUser;
            } else {
                console.log('User email not found');
            }
        } else {
            console.log('No Data Available');
        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * @SET
 * @CEO ADD Product 
 * 로그인한 유저의 id 값을 사용하여 userCeo 안에 product안에 데이터를 추가함
 * mypage에서 userCeo의 데이터를 받고 다른 하위 페이지에 데이터를 넘겨주는 문제가 있었다 방법을 모르겠고 처음부터 설계가 잘못된건가 싶다.
 */
export async function addNewDessert(product,ceoId,imageUrl){
    const dbRef = ref(db);
    const id = uuid()
    const productRef = child(dbRef, `userCeo/${ceoId}/product/${id}`);

    return set(productRef,{
        id,
        likeCount:0,
        title:product.title,
        description:product.description,
        image:imageUrl,
        userId:ceoId
    })
}

/**
 * @GET
 * Object.values(userCeo)를 했는데 product도 또 해줘야되더라 
 * userProfile과 코드가 거희 똑같다 리턴값이 product이다 코드 중복을 제거하고싶지만 나중에하자 
 * TODO: 코드중복 제거 가능한가? Context사용해서 가능할듯 구현부 
 * @returns 
 */
export async function getDessertList() {
    const currentuser = auth.currentUser
    const userEmail = currentuser.email;
    console.log(userEmail);
    try {
        const snapshot = await get(ref(db, 'userCeo'));
        // console.log(snapshot);
        if (snapshot.exists()) {
            const userCeo = snapshot.val();
            // console.log('product',userCeo);
            // userCeo 객체를 배열로 변환하여 사용자 이메일과 비교
            const userCeoArray = Object.values(userCeo);
            const matchedUser = userCeoArray.find(ceo => ceo.email === userEmail);

            if (matchedUser) {
                const productdata = Object.values(matchedUser.product)
                console.log("productdata",productdata);
                return productdata;
            } else {
                console.log('User email not found');
            }
        } else {
            console.log('No Data Available');
        }
    } catch (error) {
        console.error(error);
    }

}

/**
 * @POST
 * 로그인한 유저의 id값을 가져와야 하는데 다른곳에서 이미 userId를 가져오고 있다 유저의 정보를 context로 만들어 줘야 하나 깊이 생각했다 
 * userId값은 다른곳에서도 사용 가능성이 있기때문에 
 * 우선  DessertListCard에서 navigate사용해서 userId값을 가져와서 적용해주었다.
 * update할때 기존 데이터를 먼저 불러와서 update할 데이터를 적용해주는 방식인거같다 
 * 기분탓인지 모르겠지만 update가  set보다 빠른거같다 network창에도 따로 update되었다는 말이없다 하지만 업데이트 되었다... 
 * @param {*} id 
 * @param {*} uproduct 
 * @param {*} imageurl 
 * @param {*} userId 
 */
export async function updateDessert(id,uproduct,imageurl,userId){

    try{
        const dbRef = ref(db);
        const uProductRef = child(dbRef,`userCeo/${userId}/product/${id}`);
        const updateDate = {   
            title: uproduct.title,
            description: uproduct.description,
            image: imageurl,
        };
            await update(uProductRef, updateDate);
            console.log("업데이트 성공!");
        } catch (error) {
            console.error("업데이트 오류:", error);
        }
}

/**
 * @REMOVE
 * 삭제 성공시 페이지에 캐싱된 데이터가 바로 업데이트 안되고 ui에는 그대로 표시되는 문제가 있었다
 * useMutaion을 사용하여 invalidateQueries를 사용하여 업데이트 되도록 함.
 * @param {*} userId 
 * @param {*} id 
 * @returns 
 */
export async function removeDessert(userId,id) {
    const dbRef = ref(db);
    const uProductRef = child(dbRef,`userCeo/${userId}/product/${id}`);

    return remove(uProductRef)
}