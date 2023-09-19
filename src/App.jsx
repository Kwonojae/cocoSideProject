import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ModalProvider } from "./context/ModalContext";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ModalProvider>
            <Header />
            <Outlet />
            {/* <Footer /> */}
          </ModalProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}
