import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import {Chart} from 'chart.js/auto'
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

function App() {
  return (
    <div className="App">
      <Wrapper>
      </Wrapper>
    </div>
  )
}

export default App;
