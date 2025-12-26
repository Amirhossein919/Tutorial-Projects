  let Calculation = '';

  function withCalculation(value){
    Calculation += value;
  }
  function TheCalculation(){
    document.getElementById('Result').innerHTML = Calculation;
  }
  function Operations(operator) {
    const trimmed = Calculation.trim();

    // Check if the last character is an operator
    if (/[+\-*/]$/.test(trimmed)) {
      // Replace the last operator
      Calculation = trimmed.slice(0, -1) + operator;
    } else {
      Calculation += ` ${operator} `;
    }
  }
  function evaluateCalculation(){
    try {
      Calculation = eval(Calculation).toString();
      TheCalculation();
    } catch {
      Calculation = 'Error';
      TheCalculation();
    }
  }
  function handleKeyInput(event) {
  const key = event.key;

  if (!isNaN(key)) {
    // If it's a number (0–9)
    withCalculation(key);
    TheCalculation();
  } else if ('+-*/'.includes(key)) {
    Operations(key);
    TheCalculation();
  } else if (key === 'Enter' || key === '=') {
    evaluateCalculation();
    TheCalculation();
  } else if (key.toLowerCase() === 'c' || key === 'Escape') {
    Calculation = '';
    TheCalculation();
  } else if (key === 'Backspace') {
    Calculation = Calculation.trim().slice(0, -1);
    TheCalculation();
  }
}

document.addEventListener('keydown', handleKeyInput);