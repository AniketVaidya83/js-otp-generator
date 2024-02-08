let input = document.querySelector("input");
let button = document.querySelector("button");

const generateOTP = () => {
  return Math.floor(Math.random() * (9999 - 1 + 1 ) + 999).toString();
};

const insertOTP = () => { 
 
  const otp = generateOTP();

  if (otp.length === 4) {
    input.value = otp;
  }
};

button.addEventListener("click", insertOTP);

setInterval(() => {
  insertOTP();
}, 5000);

// Solve Click SKip Issue
// Generate By Slecting Numbers
// Generate Alphanumeric OTP
