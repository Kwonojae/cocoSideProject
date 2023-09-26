import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ModalProvider } from "./context/ModalContext";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ModalProvider>
          <div className="flex flex-col  ">
            <div className="flex flex-col  w-full flex-none h-36 fixed  left-0 right-0 top-0  z-50 items-center ">
              <Header />
              <Navbar />
            </div>
            <div className="flex grow ">
              <Outlet />
            </div>
          </div>
          {/* <Footer /> */}
        </ModalProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
