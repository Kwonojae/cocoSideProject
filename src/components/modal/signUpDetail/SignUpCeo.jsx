import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import SignUpCeoInputGroup from "./SignUpCeoInputGroup";
import { useContext, useState } from "react";
import { createUser } from "../../../api/firebase";
import { ModalContext } from "../../../context/ModalContext";

export default function SignUpCeo() {
  const [ceoInfo, setCeoInfo] = useState({});
  const { setOpen } = useContext(ModalContext);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChagne = (e) => {
    const { id, value } = e.target;
    if (id === "phone") {
      const phoneNumber = value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
      setCeoInfo((ceoInfo) => ({ ...ceoInfo, [id]: phoneNumber }));
    } else {
      setCeoInfo((ceoInfo) => ({ ...ceoInfo, [id]: value }));
    }
    console.log(ceoInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ceoInfo: ", ceoInfo);
    try {
      if (ceoInfo.password.length < 6) {
        console.log("ceoInfo.password.length: ", ceoInfo.password.length);
        return alert("비밀번호가 6자 이하입니다");
      } else if (ceoInfo.password !== ceoInfo.confirm_password) {
        return alert("비밀번호와 확인 비밀번호가 다릅니다.");
      } else if (!emailRegex.test(ceoInfo.email)) {
        return alert("이메일 형식을 확인해주세요");
      } else {
        setOpen(false);
        return createUser(ceoInfo);
      }
    } catch (error) {
      alert("무언가 잘못되었어 개발자를 손가락질해라!");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white p-16">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <SignUpCeoInputGroup
              onChange={handleChagne}
              label="First name"
              id="first_name"
              value={ceoInfo.first_name ?? ""}
              type="text"
              placeholder="John"
              autocomplete="new_first_name"
              required
            />
            <SignUpCeoInputGroup
              onChange={handleChagne}
              label="Last name"
              id="last_name"
              value={ceoInfo.last_name ?? ""}
              type="text"
              placeholder="Doe"
              autocomplete="new_last_name"
              required
            />
            <SignUpCeoInputGroup
              onChange={handleChagne}
              label="Company"
              id="company"
              value={ceoInfo.company ?? ""}
              type="text"
              placeholder="Flowbite"
              autocomplete="new_company"
              required
            />
            <SignUpCeoInputGroup
              onChange={handleChagne}
              label="Phone number"
              id="phone"
              value={ceoInfo.phone ?? ""}
              type="tel"
              placeholder="123-45-678"
              autocomplete="new_phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
            <SignUpCeoInputGroup
              onChange={handleChagne}
              label="Website URL"
              id="website"
              value={ceoInfo.website ?? ""}
              type="url"
              placeholder="https://website.com"
              autocomplete="new_website"
              required
            />
          </div>
          <SignUpCeoInputGroup
            onChange={handleChagne}
            label="Email address"
            id="email"
            value={ceoInfo.email ?? ""}
            type="email"
            placeholder="coco@company.com"
            autocomplete="new_email"
            required
          />
          <SignUpCeoInputGroup
            onChange={handleChagne}
            label="Password"
            id="password"
            value={ceoInfo.password ?? ""}
            type="password"
            placeholder="6개 이상 입력해주세요"
            autocomplete=""
            required
          />
          {/* pwd체크 메서드 구현하기 */}
          <SignUpCeoInputGroup
            onChange={handleChagne}
            label="Confirm password"
            id="confirm_password"
            value={ceoInfo.confirm_password ?? ""}
            type="password"
            placeholder="6개 이상 입력해주세요"
            autocomplete=""
            required
          />
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              I agree with the
              <Link
                to="/mypage"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </Link>
              .
            </label>
          </div>
          <Button type="submit" text="Submit" />
        </form>
      </div>
    </div>
  );
}
