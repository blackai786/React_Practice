import "./App.css";
import ProductTab from "./Product_tab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
    <>
      <ProductTab />
      <MsgBox userName="ShaikhSahil" textColor="yellow" />
      <MsgBox userName="salim" textColor="red" />
    </>
  );
}

export default App;
