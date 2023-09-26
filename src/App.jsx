import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ModalProvider } from "./context/ModalContext";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();
export default function App() {
  return (
    <div className="flex flex-col h-full w-full">
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ModalProvider>
            <div className="flex flex-col w-full flex-grow-0  left-0 right-0 top-0  z-50 items-center ">
              <Header />
              <Navbar />
            </div>
            <div className="w-full flex-grow  h-full">
              <Outlet />
            </div>
            {/* <Footer /> */}
          </ModalProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
