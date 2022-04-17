import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Middle from "./components/Middle";

function App() {
  const [products, setProducts] = useState(null);
  return (
    <div className="App">
      <Header products={products} />
      <Middle />
      <Main products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
