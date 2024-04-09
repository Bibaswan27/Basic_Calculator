import React, { useState } from 'react';
const Calculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleOperandChange = (event, operand) => {
    const value = event.target.value;
    if (operand === 'operand1') {
      setOperand1(value);
    } else if (operand === 'operand2') {
      setOperand2(value);
    }
  };

  const handleOperatorClick = (selectedOperator) => {
    setOperator(selectedOperator);
  };

  const handleDigitClick = (digit) => {
    if (operator === '') {
      setOperand1((prevOperand) => prevOperand + digit);
    } else {
      setOperand2((prevOperand) => prevOperand + digit);
    }
  };

  const handleDecimalClick = () => {
    if (operator === '') {
      if (!operand1.includes('.')) {
        setOperand1((prevOperand) => prevOperand + '.');
      }
    } else {
      if (!operand2.includes('.')) {
        setOperand2((prevOperand) => prevOperand + '.');
      }
    }
  };

  const handleClearScreen = () => {
    setOperand1('');
    setOperand2('');
    setOperator('');
    setResult('');
  };

  const handleBackspace = () => {
    if (operator === '') {
      setOperand1((prevOperand) => prevOperand.slice(0, -1));
    } else {
      setOperand2((prevOperand) => prevOperand.slice(0, -1));
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          setResult('Division by zero');
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult('Invalid operator');
    }
  };

  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor:'grey'
  };

  const inputStyle = {
    margin: '8px',
    padding: '8px',
    width: '80%',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    margin: '8px',
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const resultStyle = {
    marginTop: '16px',
    padding: '8px',
    backgroundColor: '#f1f1f1',
    borderRadius: '4px',
  };

  return (
    <div style={containerStyle}>
      <h1>Basic Calculator</h1>
      <div>
        <input
          type="text"
          value={operand1}
          onChange={(e) => handleOperandChange(e, 'operand1')}
          style={inputStyle}
        />
        <div style={{ display: 'flex', justifyContent:'center'}}>
          <button key={1} onClick={() => handleDigitClick(1)} style={buttonStyle}>
            1
          </button>
          <button key={2} onClick={() => handleDigitClick(2)} style={buttonStyle}>
            2
          </button>
          <button key={3} onClick={() => handleDigitClick(3)} style={buttonStyle}>
            3
          </button>
          <button onClick={() => handleOperatorClick('+')} style={buttonStyle}>+</button>
        </div>
        <div style={{ display: 'flex',justifyContent:'center' }}>
          <button key={4} onClick={() => handleDigitClick(4)} style={buttonStyle}>
            4
          </button>
          <button key={5} onClick={() => handleDigitClick(5)} style={buttonStyle}>
            5
          </button>
          <button key={6} onClick={() => handleDigitClick(6)} style={buttonStyle}>
            6
          </button>
          <button onClick={() => handleOperatorClick('-')} style={buttonStyle}>-</button>
        </div>
        <div style={{ display: 'flex',justifyContent:'center' }}>
          <button key={7} onClick={() => handleDigitClick(7)} style={buttonStyle}>
            7
          </button>
          <button key={8} onClick={() => handleDigitClick(8)} style={buttonStyle}>
            8
          </button>
          <button key={9} onClick={() => handleDigitClick(9)} style={buttonStyle}>
            9
          </button>
          <button onClick={() => handleOperatorClick('*')} style={buttonStyle}>*</button>
        </div>
        <div>
        <button onClick={() => handleOperatorClick('/')} style={buttonStyle}>/</button>
        <button onClick={handleDecimalClick} style={buttonStyle}>.</button>
        <button onClick={handleClearScreen} style={buttonStyle}>AC</button>
        <button onClick={handleBackspace} style={buttonStyle}>Backspace</button>
        <input type="text" value={operand2} onChange={(e) => handleOperandChange(e, 'operand2')} style={inputStyle} />
        <button onClick={calculateResult} style={buttonStyle}>=</button>
      </div>
      </div>
      <div style={resultStyle}>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
  
};

export default Calculator;

