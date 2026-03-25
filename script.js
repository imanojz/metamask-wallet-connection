const connectButton = document.getElementById("connectButton");
const accountAddress = document.getElementById("accountAddress");

async function connectWallet() {
    // Check if MetaMask is installed
    if (window.ethereum) {
        try {
            // Request wallet connection
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            // Display wallet address
            accountAddress.innerText = "Wallet Address: " + accounts[0];

            console.log("Connected Account:", accounts[0]);

        } catch (error) {
            // Handle user rejection
            console.error("User denied account access:", error);
        }
    } else {
        alert("MetaMask not detected! Please install MetaMask.");
    }
}

connectButton.addEventListener("click", connectWallet);
