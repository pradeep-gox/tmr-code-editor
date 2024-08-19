import React from "react";
import TMRCodeEditor from "./components/TMRCodeEditor";

const App: React.FC = () => {
  return (
    <TMRCodeEditor
      mode="json"
      placeholder={`{
  "a": 1,
  "b": 2
}`}
    />
  );
};

export default App;
