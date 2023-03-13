import './App.css';
import Title from './components/Title';
import Counter from './components/Counter';
import Lightning from "./assets/Lightning.jpeg";
import useCountdown from './hooks/useCountdown';

function App() {
  const datafinal = null;

  if (datafinal == null) {
    return (
      <div className='App' style={{ backgroundImage: `url(${Lightning})` }}>
        <div className='container'>          
          <form action="POST">
            <input type="text" />
            <button type="submit">salvar</button>
          </form>          
        </div>
      </div>
    )
  } else {
    const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00");

    return (
      <div className="App" style={{ backgroundImage: `url(${Lightning})` }}>
        <div className="container">
          <Title title="Contagem regressiva"/>
          <div className="countdown-container">
            <Counter title="Dias" number={day} />
            <Counter title="Horas" number={hour} />
            <Counter title="Minutos" number={minute} />
            <Counter title="Segundos" number={second} />
          </div>
        </div>
      </div>
    )    
  }

}

export default App
