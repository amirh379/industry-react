import Footer1 from "@/components/footers/Footer1";
import Header22 from "@/components/headers/Header22";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Clients from "@/components/homes/home-1/Clients";
import Cta from "@/components/homes/home-1/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Services from "@/components/homes/home-1/Services";
import Testimonials from "@/components/homes/home-1/Testimonials";
export const metadata = {
  title: "خانه || ثامن فرفورژه",
  description: "شرکت صنایع فلزی هشتمین نور - ثامن فرفورژه",
};

export default function Home1() {
  return (
    <>
      <div className="page-wraper ">
        <Header22 />
        <div className="page-content bg-white">
          <Hero />
          <About />
          <Cta />
          <Services />
          <Facts />
          <Blogs />
          <Testimonials />
          <Clients />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
