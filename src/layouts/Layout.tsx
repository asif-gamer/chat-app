import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col  h-screen">
      <Header />
      <div className=" mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
