import BlogHome from "../components/BlogHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Header bg={"home"} />
      <BlogHome />
      <Footer />
    </>
  );
}
