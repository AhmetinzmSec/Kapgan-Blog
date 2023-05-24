---
title: 🪄 Hızlı Gösterim
id: quick-guide
description: Kodların nasıl gözüktüğüne göz gezdirin
---
**********************************************************
## Örnek Kod
**React.Js** ile yazılmış kısa bir kod örneği

**Örnek:**
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Merhaba Dünya</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);
```
**********************************************************

**Bir Sürprizimiz Var! Canlı Düzenleyici İle Tanışın**
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>Canlı Zaman {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```