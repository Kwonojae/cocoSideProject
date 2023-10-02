import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ModalProvider } from "./context/ModalContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./context/AuthContext";

const queryClient = new QueryClient();
export default function App() {
  return (
    <div className="flex flex-col h-screen w-full ">
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ModalProvider>
            <Header />
            <Outlet />
          </ModalProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
