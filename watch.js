
    function setClock() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondDeg = (seconds / 60) * 360;
      const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
      const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;

      
      document.getElementById('second').style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
      document.getElementById('minute').style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
      document.getElementById('hour').style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    }

    setInterval(setClock, 1000);

    
    setClock();