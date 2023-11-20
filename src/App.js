import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import symetryxPosition from "./assets/symetryx-position.pdf"

function App() {
  return (
    <>
      <div className="banner">
        <p>
          <strong>
            Check-Cap Shareholders{" "}
            <a href={symetryxPosition} target="blank">
              click here
            </a>
          </strong>
        </p>
      </div>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
