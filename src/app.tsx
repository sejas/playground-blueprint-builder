import "./app.css";
import {
  Button,
} from "@wordpress/components";
import "@wordpress/components/build-style/style.css";
import { Header } from "./components/header";
import { Allotment } from "allotment";
import "allotment/dist/style.css";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
      <Allotment>
          <div style={{ position: 'relative', height: '100%' }}>
            <textarea 
              style={{ height: '100%', width: '100%' }}
            />
            <Button 
              style={{ 
                position: 'absolute', 
                top: 0, 
                right: 0, 
                zIndex: 1 
              }} 
              onClick={()=> alert('Copied!')}
            >
              Copy
            </Button>
          </div>
          <iframe 
            style={{ height: '100%', width: '100%' }}
            title="Playground"
          />
        </Allotment>
      </main>
    </div>
  );
}

export default App;
