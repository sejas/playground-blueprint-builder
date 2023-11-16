import "./app.css";
import "@wordpress/components/build-style/style.css";
import { Header } from "./components/header";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { Editor } from "./components/editor";
import styled from "styled-components";
import { useBlueprintJson } from "./hooks/use-blueprint-json";

const Iframe = styled.iframe({
  height: "100%",
  width: "100%",
});

function App() {
  const { blueprintText, blueprintJson, setBlueprintText } = useBlueprintJson();
  return (
    <div className="app">
      <Header />
      <main className="main">
      <Allotment>
          <Editor value={blueprintText} onChange={setBlueprintText} />
          <Iframe 
            title="Playground"
            src={`https://playground.wordpress.net/?mode=seamless#${JSON.stringify(blueprintJson)}`}
          />
        </Allotment>
      </main>
    </div>
  );
}

export default App;
