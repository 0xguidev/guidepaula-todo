import './App.css';
import { TaskProvider } from './providers';
import Paths from './Routes/';

function App() {
  return (
    <TaskProvider>
      <Paths />
    </TaskProvider>
  );
}

export default App;
