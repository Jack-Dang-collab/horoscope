import { Route, Routes } from 'react-router-dom';
import { Horoscope } from './pages';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Horoscope />} />
      </Routes>
    </div>
  )
}

export default App
