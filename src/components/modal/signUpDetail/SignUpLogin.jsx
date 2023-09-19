import { useContext, useState } from "react";
import InPut from "../../ui/InPut";
import Button from "../../ui/Button";
import { useAuthContext } from "../../../context/AuthContext";
import { ModalContext } from "../../../context/ModalContext";

export default function SignUpLogin() {
  const [user, setUser] = useState({});
  const { login } = useAuthContext();
  const { setOpen } = useContext(ModalContext);

  const handleChagne = (e) => {
    const { id, value } = e.target;
    setUser((user) => ({ ...user, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(user);
      setOpen(false);
    } catch (error) {
      //TODO: 로그인 실패 사유
      //로그아웃시 권한 설정 라우터 프로텍티드
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-2xl mx-auto bg-white p-10 ">
        <InPut
          onChange={handleChagne}
          label="EMAIL"
          id="email"
          value={user.email ?? ""}
          type="email"
          placeholder="Email"
          autocomplete="new_email"
          required
        />
        <InPut
          onChange={handleChagne}
          label="PASSWORD"
          id="password"
          value={user.password ?? ""}
          type="password"
          placeholder="Password"
          autocomplete="new_password"
          required
        />
        <div className="pt-5 grid">
          <Button type="submit" text="Login" />
        </div>
      </div>
    </form>
  );
}
