// generate random 6-digit OTP
function generateOTP() {
    let digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

// send OTP to user's email
function sendOTP() {
    let email = document.getElementById('email').value;
    let otp = generateOTP();
    let data = { email: email, otp: otp };
    // make API call to server to send email with OTP
    fetch('/send-otp', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        console.log('OTP sent successfully');
    }).catch(function(error) {
        console.error('Error sending OTP:', error);
    });
}

// verify OTP entered by user
function verifyOTP() {
    let email = document.getElementById('email').value;
    let otp = document.getElementById('otp').value;
    let data = { email: email, otp: otp };
    // make API call to server to verify OTP
    fetch('/verify-otp', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        console.log('OTP verified successfully');
        // redirect user to dashboard or home page
        window.location.href = '/dashboard';
    }).catch(function(error) {
        console.error('Error verifying OTP:', error);
    });
}
