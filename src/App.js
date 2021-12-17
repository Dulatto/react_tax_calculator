import './App.css';
import Filters from './Views/Filters';
import Results from './Views/Results';
import SalaryRate from './Views/SalaryRate';
import Summary from './Views/Summary';

function App() {
  return (
    <div className="App">
      <div className="container bg-white">
        <h1 className="mt-4 pt-4">Income tax calculator Canada</h1>
        <h3>Find out how much your salary is after tax</h3>
        <Filters />
        <SalaryRate />
        <Results />
        <Summary />
      </div>
    </div>
  );
}

export default App;
