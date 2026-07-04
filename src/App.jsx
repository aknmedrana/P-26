import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <Navbar onOpenModal={setActiveSection} />

      <Dashboard
        activeSection={activeSection}
        onCloseModal={() => setActiveSection(null)}
      />
    </>
  );
}

export default App;
