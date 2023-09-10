import AddDessertForm from "../../components/mypage/AddDessertForm";
import DessertList from "../../components/mypage/DessertList";
import UserProfile from "../../components/mypage/UserProfile";

export default function MyPage() {
  return (
    <>
      MyPage
      <UserProfile />
      <DessertList />
      <AddDessertForm />
    </>
  );
}
