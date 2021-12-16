import './App.css';
import Filters from './Views/Filters';
import Results from './Views/Results';
import SalaryRate from './Views/SalaryRate';
import Summary from './Views/Summary';

function App() {
  return (
    <div className="App">
      <Filters />
      <SalaryRate />
      <Results />
      <Summary />
    </div>
  );
}

export default App;
