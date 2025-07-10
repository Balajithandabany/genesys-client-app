const clientApp = new window.purecloud.apps.ClientApp();

clientApp.on('ready', () => {
  document.getElementById('status').textContent = '✅ Connected to Genesys Cloud';
  document.body.style.backgroundColor = '#f0fff0';
});

clientApp.on('context', (context) => {
  console.log('Context received:', context);
});

clientApp.on('error', (err) => {
  console.error('Client App SDK Error:', err);
  document.getElementById('status').textContent = '❌ Error connecting to Genesys';
});
