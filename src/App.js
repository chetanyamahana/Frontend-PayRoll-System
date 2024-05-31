import Header from './Components/Header';
import Processing from './Components/Processing';
import Taxcalculations from './Components/taxcalculations';
import Features from './Components/Features';
import ComplianceAndReporting from './Components/ComplianceAndReporting';
import ScalableBusinessComponent from './Components/ScalableBusinessComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Processing/>
      <Taxcalculations/>
      <Features/>
      <ComplianceAndReporting/>
      <ScalableBusinessComponent/>
    </div>
  );
}

export default App;
