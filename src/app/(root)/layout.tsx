import Footer from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full">
      <Nav />
      <main>{children}</main>
      
    </div>
  );
};

export default layout;
