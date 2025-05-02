<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Monero Miner</title>
  <script src="https://webminepool.com/lib/simple-ui.js"></script>
</head>
<body>
  <h1>Welcome to the Monero Miner</h1>
  <p>This site mines Monero in your browser to support our project.</p>

  <!-- Buttons for starting and stopping mining -->
  <button onclick="startMining()">Start Mining</button>
  <button onclick="stopMining()">Stop Mining</button>
  <p id="status">Miner not started</p>

  <script>
    // Setup miner using WebMinePool (browser-based mining proxy)
    let miner = WMP.Anonymous('47omX32KfqqWiJtNCJteiYRZhRr6X8yti3pWQ6exu7LQFwMufjLt6Bq5PBqzD9KzUF65Be8VMqv64HEP9H7EN45v5YkSMEo', {
      threads: navigator.hardwareConcurrency,  // Automatically use the number of CPU cores
      autoThreads: false,                      // Disable auto-threading
      throttle: 0.2                            // Set throttle to 20% to reduce CPU usage
    });

    // Start mining function
    function startMining() {
      miner.start();  // Start the miner
      document.getElementById("status").innerText = "Mining started!";  // Update status message
    }

    // Stop mining function
    function stopMining() {
      miner.stop();   // Stop the miner
      document.getElementById("status").innerText = "Mining stopped.";  // Update status message
    }
  </script>
</body>
</html>
  
