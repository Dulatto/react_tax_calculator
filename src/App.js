import './App.css';
import { useStore } from './store';
import Filters from './Views/Filters';
import Results from './Views/Results';
import SalaryRate from './Views/SalaryRate';
import Summary from './Views/Summary';

const App = () => {
  const [state, setState] = useStore();

  return (
    <div className="App">
      <div className="container">
        <div className="row bg-white py-4">
          <h2 className="mt-1 pt-2 fw-bold">Income tax calculator Canada</h2>
          <h5>Find out how much your salary is after tax</h5>
          <div className="col-sm-12">
            <Filters />
          </div>
        </div>
        {/* <SalaryRate /> */}
        <Results />
        {state.income !== 0 ? <Summary /> : null}
      </div>
    </div>
  );
}

export default App;
