import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      {/* Header component if needed */}
       <Header />
      <main>
        <Outlet />
      </main>
      {/* Footer component if needed */}
    </div>
  );
};

export default Layout;
