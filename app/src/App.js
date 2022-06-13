import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Body />
      <Footer />
    </div>
    </>
  );
}

export default App;
