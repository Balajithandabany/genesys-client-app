const clientApp = new window.purecloud.apps.ClientApp();

// Called when the app is ready and connected to Genesys Cloud UI
clientApp.on('ready', () => {
  document.getElementById('status').textContent = '✅ Connected to Genesys Cloud';
  document.body.style.backgroundColor = '#f0fff0';
});

// Called whenever the interaction context changes
clientApp.on('context', (context) => {
  console.log('🔄 Context updated:', context);

  const interactionContext = context?.interaction;

  if (interactionContext && interactionContext.conversationId) {
    const id = interactionContext.conversationId;

    let info = document.getElementById('activeInteraction');

    if (!info) {
      info = document.createElement('p');
      info.id = 'activeInteraction';
      document.body.appendChild(info);
    }

    info.textContent = `🎧 Active Interaction ID: ${id}`;
  } else {
    // No active interaction (e.g., empty pane or none selected)
    let info = document.getElementById('activeInteraction');
    if (info) {
      info.textContent = 'No active interaction.';
    }
  }
});

// Optional: handle errors from the SDK
clientApp.on('error', (err) => {
  console.error('❌ Client App SDK Error:', err);
  document.getElementById('status').textContent = '❌ Error connecting to Genesys';
});
