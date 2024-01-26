import Team from "../src/pages/team";
import Developer from "./pages/developers";
import Testimonials from "./pages/Testimonial";
import Gallery from "./components/gallery";
import CardContainer from "./components/jccontainer";
import Section from "./components/section";
import BlogSlider from "./components/ImageGallery";
function App() {
  return (
    <div className="App">
      <Developer />
      <Team />
      <Gallery />
      <CardContainer />
      <Testimonials />
      <Section />
      <BlogSlider />
    </div>
  );
}

export default App;
