import { Outlet } from "react-router";

import ClientHeader from "./ClientHeader";
import ClientFooter from "./ClientFooter";

const ClientLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ClientHeader />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <ClientFooter />
    </div>
  );
};

export default ClientLayout;