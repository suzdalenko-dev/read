(function () {
  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #messageContainer {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      pointer-events: none;
    }

    .messageBox {
      padding: 16px 24px;
      border-radius: 8px;
      color: #fff;
      font-size: 16px;
      font-family: sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      max-width: 90%;
      text-align: center;
      opacity: 0;
      animation: fadeInOut 11s ease-in-out forwards;
      pointer-events: auto;
    }

    .success { background-color: #4CAF50; }
    .error   { background-color: #F44336; }
    .warning { background-color: #FFC107; color: #000; }

    @keyframes fadeInOut {
      0%   { opacity: 0; transform: translateY(-80px); }
      10%  { opacity: 1; transform: translateY(0); }
      90%  { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-80px); }
    }
  `;
  document.head.appendChild(style);

  // Create container if not exists
  let container = document.getElementById('messageContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'messageContainer';
    document.body.appendChild(container);
  }

  // Expose the showMessage function globally
  window.showM = function (message, type = 'success') {
    const msg = document.createElement('div');
    msg.className = `messageBox ${type}`;
    msg.textContent = message;

    container.appendChild(msg);

    setTimeout(() => {
      container.removeChild(msg);
    }, 11000);
  };
})();
