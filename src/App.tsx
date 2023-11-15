import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Button,
} from "@wordpress/components";
import "@wordpress/components/build-style/style.css";

function App() {
  return (
    <div className="app">
      <header className="app_header">
        <HStack>
          <Text>WordPress Playground Blueprint Builder</Text>
          <Button variant="primary" onClick={() => alert("Hello World")}>
            Run
          </Button>
        </HStack>
      </header>
      <main></main>
    </div>
  );
}

export default App;
