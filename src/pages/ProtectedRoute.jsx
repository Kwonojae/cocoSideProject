import { Navigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  //|| (requireAdmin && !user.isAdmin
  console.log("여기  ", user);
  if (user === undefined) {
    /**
     *  주소로 입력하여 이동하였을시 useEffect로 인한 onUserSttateChange가 호출되기전에 user의 값을 가져오기 때문에
     *  AuthContext의 useState가 undefiend로 설정되어있어서 user의 정보가 비어있는걸로 나온다.
     *  그래서 페이지 이동시 return <></>; 실행되고 그다음 useEffect가 실행되서 user가 세팅된다
     * 화면 깜빡임과 연관있는듯함 100퍼센트 이해는 안됨...
     * */
    return <></>;
  } else if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
