import React from "react";
import TMRCodeEditor from "./components/TMRCodeEditor";

const App: React.FC = () => {
  return <TMRCodeEditor mode="psql" placeholder={`SELECT * FROM ....`} />;
};

export default App;
