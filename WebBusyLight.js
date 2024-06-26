

const customColorInput = document.getElementById('customColorInput');
//const enterButton = document.getElementById('btnEnter'); // Get reference to new button
const responseDiv = document.getElementById('response');
const buttons = document.querySelectorAll('button');
const partyMode = document.getElementById('btnPartyMode');
const buttonOff = document.getElementById('btnOff');


const IPaddress = '10.4.3.150:8000';


// Define a map of button IDs to preset colors
const presetColors = {
  btnAvailable: 'green',
  btnAway: 'yellow',
  btnBusy: 'red',
  btnDoNotDisturb: 'purple',
  btnBYUIBlue: '006EB6'
};


buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
  partyMode.addEventListener('click', handlePartyMode);
  buttonOff.addEventListener('click', handleOff);
});



function handleButtonClick(event) {
  const customColor = customColorInput.value || ''; // Use empty string if no color entered
  let finalColor;

  // Check if button has a preset color
  if (presetColors.hasOwnProperty(event.target.id)) {
    finalColor = presetColors[event.target.id];
  } else {
    finalColor = customColor; // Use custom color if no preset for button
  }

  const status = event.target.innerText.toLowerCase();  // Get status from button text

  // Format the URL with finalColor and status
  const url = `http://${IPaddress}/lights/on?color=${finalColor}&dim=1`;

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        responseDiv.textContent = 'Status Updated!';
      } else {
        responseDiv.textContent = `Error: ${xhr.status}`;
      }
    }
  };

  xhr.open('GET', url, true); // Use GET method for all buttons
  xhr.send();
}



function handlePartyMode() {
  // Define the custom URL for this button
  const customUrl = `http://${IPaddress}/lights/rainbow?speed=medium&dim=1`;

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        responseDiv.textContent = 'Party Mode Successful!';
      } else {
        responseDiv.textContent = `Error: ${xhr.status}`;
      }
    }
  };

  xhr.open('GET', customUrl, true); // Use GET method
  xhr.send();
}


function handleOff() {
  // Define the custom URL for this button
  const customUrl = `http://${IPaddress}/lights/off`; 

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        responseDiv.textContent = 'Custom Request Successful!';
      } else {
        responseDiv.textContent = `Error: ${xhr.status}`;
      }
    }
  };

  xhr.open('GET', customUrl, true); // Use GET method
  xhr.send();
}
