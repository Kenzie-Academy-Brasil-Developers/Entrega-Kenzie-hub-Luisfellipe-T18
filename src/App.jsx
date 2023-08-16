import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
