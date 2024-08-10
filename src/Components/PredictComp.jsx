import React ,{ useState } from 'react';
import './PredictComp.css';
import HeroBackground from '../assets/HeroBackground.png';


const PredictComp = () => {
    const [machine, setMachine] = useState('');
    const [component, setComponent] = useState('');
    const [parameter, setParameter] = useState('');
    const [value, setValue] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // You can submit the form data to your server here
      console.log('Machine:', machine);
      console.log('Component:', component);
      console.log('Parameter:', parameter);
      console.log('Value:', value);
    };
    return (
      <section className="predict-main">
        <div className="logo">
        </div>
        <div className="form">
          <h2>Kindly enter the details below so that we can predict component failures based on history and usage data.</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="machine">Machine</label>
              <input
                type="text"
                id="machine"
                value={machine}
                onChange={(e) => setMachine(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="component">Component</label>
              <input
                type="text"
                id="component"
                value={component}
                onChange={(e) => setComponent(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="parameter">Parameter</label>
              <input
                type="text"
                id="parameter"
                value={parameter}
                onChange={(e) => setParameter(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="value">Value</label>
              <input
                type="text"
                id="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        
      </section>
    );
  }
  
  export default PredictComp;