import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ModalProvider } from "./context/ModalContext";
import AuthContextProvider from "./context/AuthContext";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <ModalProvider>
          <Header />
          <Outlet />
          <Footer />
        </ModalProvider>
      </AuthContextProvider>
    </>
  );
}
