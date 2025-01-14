import About from "@/components/About";
import Navbar from "@/components/navbar";

export default function aboutPage() {
  return (
      <div>
        <Navbar />
        <About />
    </div>
  );
}

aboutPage.displayName = "aboutPage";
