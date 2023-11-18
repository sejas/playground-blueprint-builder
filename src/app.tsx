import "./app.css";
import "@wordpress/components/build-style/style.css";
import 'pretty-print-json/css/pretty-print-json.dark-mode.min.css'
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
  const { blueprint, setBlueprintText } = useBlueprintJson();
  return (
    <div className="app">
      <Header />
      <main className="main">
      <Allotment>
          <Editor value={blueprint.html} onChange={setBlueprintText} />
          <Iframe 
            title="Playground"
            src={`https://playground.wordpress.net/?mode=seamless&time=${new Date().getTime()}#${JSON.stringify(blueprint.json)}`}
          />
        </Allotment>
      </main>
    </div>
  );
}

export default App;
