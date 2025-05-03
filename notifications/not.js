
    (function () {
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
          text-align: left;
          opacity: 0;
          animation: fadeInOut 11s ease-in-out forwards;
          position: relative;
          pointer-events: auto;
          min-width: 280px;
          max-width: 600px;
        }

        .messageBox .title {
          font-weight: bold;
          margin-bottom: 6px;
        }

        .messageBox .closeBtn {
          position: absolute;
          top: 6px;
          right: 10px;
          background: none;
          border: none;
          font-size: 18px;
          color: inherit;
          cursor: pointer;
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

      let container = document.getElementById('messageContainer');
      if (!container) {
        container = document.createElement('div');
        container.id = 'messageContainer';
        document.body.appendChild(container);
      }

      const titles = {
        success: "SUCCESS",
        error: "ERROR",
        warning: "WARNING"
      };

      window.showM = function (message, type = 'success') {
        const msg = document.createElement('div');
        msg.className = `messageBox ${type}`;

        const title = document.createElement('div');
        title.className = 'title';
        title.textContent = titles[type] || 'Notice';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'closeBtn';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => {
          if (msg.parentElement) {
            msg.parentElement.removeChild(msg);
          }
        };

        const content = document.createElement('div');
        content.className = 'content';
        content.textContent = message;

        msg.appendChild(title);
        msg.appendChild(closeBtn);
        msg.appendChild(content);
        container.appendChild(msg);

        setTimeout(() => {
          if (msg.parentElement) {
            msg.parentElement.removeChild(msg);
          }
        }, 22000);
      };
    })();
