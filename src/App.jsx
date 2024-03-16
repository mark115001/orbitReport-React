import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner"
import { useState } from "react";
import satData from "./components/satData"


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  return (
    <div>
      <Buttons />
      <Banner />
      <Table />
    </div>
  );
}

export default App;