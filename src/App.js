import Movies from "./containers/Movies";
import Navbar from "./containers/Navbar";
import "./index.css";

function App() {
  return (
    <div className="landing">
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;
