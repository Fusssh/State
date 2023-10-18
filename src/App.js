
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListComponent from './ListComponent';
import ResultComponent from './ResultComponent';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" element={<ListComponent />} />
      <Route path="/result" element={<ResultComponent />} />
    </Switch>
  </Router>
  );
}

export default App;