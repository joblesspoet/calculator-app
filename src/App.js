
import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [output, setOutPut] = useState('');
  const handleButtonClick = (obj) => {
    checkLastOutput(obj);
    
    // clear state
    if(obj.value === 'C') {
      setOutPut('');
      return;
    }
    
    const new_output = output + obj.value;
    console.log(new_output)
    setOutPut(new_output);    
  }

  const evaluateResult = (obj) => {
    
    console.log(output);
    let ou_str = eval(output)
    if(!isFinite(ou_str))
      ou_str = 0;

    setOutPut(ou_str)

  }

  const operaTorClick = (obj) => {
    checkLastOutput(obj);
    const last_item = output.charAt(output.length -1);
    
    if(last_item === '+' || last_item === '-'){
      setOutPut(output.slice(0,-1)+'/');
      return ;
    }

    if(last_item === '*' || last_item === '/'){
      if(obj.value === '-'){
        setOutPut(output + obj.value);
        return;
      }
      setOutPut(output.slice(0,-1)+ obj.value );
      return ;
    }
    
    setOutPut(output + obj.value);

  }

  const checkLastOutput = (obj) => {
    if(output === '' && (obj.value === '+' || obj.value === '/'
    || obj.value === '*' || obj.value === '='
    )){
      // setOutPut('')
      return ;
    }
      
  }

  return (
    <div className="App">
      <div className="calculator">
        <div class="output">
          {output}
        </div>
        <div class="btn-container">
          <div className="btn-row">
            <Button class="digit-0" type='digit' name="0" handleClick={handleButtonClick}>0</Button>
            <Button class="digit-1" type='digit' name="1" handleClick={handleButtonClick}>1</Button>
            <Button class="digit-2" type='digit' name="2" handleClick={handleButtonClick}>2</Button>
            <Button class="digit-3" type='digit' name="3" handleClick={handleButtonClick}>3</Button>
          </div>
          <div className="btn-row">
            <Button class="digit-4" type='digit' name="4" handleClick={handleButtonClick}>4</Button>
            <Button class="digit-5" type='digit' name="5" handleClick={handleButtonClick}>5</Button>
            <Button class="digit-6" type='digit' name="6" handleClick={handleButtonClick}>6</Button>
            <Button class="digit-7" type='digit' name="7" handleClick={handleButtonClick}>7</Button>
          </div>
          <div className="btn-row">
            <Button class="digit-8" type='digit' name="8" handleClick={handleButtonClick}>8</Button>
            <Button class="digit-9" type='digit' name="9" handleClick={handleButtonClick}>9</Button>
            <Button class="op-add" type='operator'  name="+" handleClick={operaTorClick}>+</Button>
            <Button class="op-sub" type='operator'  name="-" handleClick={operaTorClick}>-</Button>
          </div>
          <div className="btn-row">
            <Button class="op-mul" type='operator' name="*" handleClick={operaTorClick}>*</Button>
            <Button class="op-div" type='operator' name="/" handleClick={operaTorClick}>/</Button>
            <Button class="eq"  type='operator'    name="=" handleClick={evaluateResult}>=</Button>
            <Button class="clear"  type='operator' name="C" handleClick={handleButtonClick}>C</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
