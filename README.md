# MetaMask Connection Demo

This is a simple project that demonstrates how to connect a user's MetaMask wallet using JavaScript.

## 🚀 Overview

In this project, a user can click a button to connect their MetaMask wallet.  
Once connected, the wallet address is displayed on the screen.

This helped me understand how Web3 wallet connection works in real applications.

## ⚙️ How It Works

1. User clicks on the "Connect to MetaMask" button  
2. The app checks if MetaMask is installed  
3. A connection request is sent using `eth_requestAccounts`  
4. MetaMask popup appears  
5. User approves or rejects the request  
6. If approved → wallet address is shown  
7. If rejected → error is logged in console  

## 💻 Tech Used

- HTML  
- JavaScript  
- MetaMask API (`window.ethereum`)  
- Ethers.js (CDN)

## 📂 How to Run

1. Download or clone the repository  
2. Open the `index.html` file in your browser  
3. Make sure MetaMask extension is installed  
4. Click the button and connect your wallet  

## 📌 Note

This is a basic demo project created for learning purposes.  
It does not store or use any sensitive data.

## 👨‍💻 Author

Manoj Kumar  
GitHub: https://github.com/imanojz/
