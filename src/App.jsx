import './App.css';
import { Routes, Route} from "react-router-dom";
import Converter from '@/pages/Converter';

function App() {

  return (
    <Routes>
      <Route path="converter" element={<Converter />} />
    </Routes>
  )
}

export default App
