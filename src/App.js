
import "./App.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileAuth from "./pages/auth/mobile/MobileAuth";

function App() {
  return (
    <main className="App">
      <ToastContainer />
      <MobileAuth/>      
    </main>
  );
}

export default App;
