import "./App.css";
import { Landing } from "./Components/Landing";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Card>
        <CardContent>
          <Landing />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
