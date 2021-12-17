import './App.css';
import Filters from './Views/Filters';
import Results from './Views/Results';
import SalaryRate from './Views/SalaryRate';
import Summary from './Views/Summary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row  bg-white py-4">
          <h1 className="mt-3 pt-4">Income tax calculator Canada</h1>
          <h5>Find out how much your salary is after tax</h5>
          <div className="col-sm-12">
            <Filters />
          </div>
        </div>

        <SalaryRate />
        <Results />
        <Summary />
      </div>
    </div>
  );
}

export default App;
