## React Hook Load

<p>It's a react hook that will help you to control your load states</p>

[![npm downloads](https://img.shields.io/npm/dm/react-hook-load.svg?style=for-the-badge)](https://www.npmjs.com/package/react-hook-load)
[![npm](https://img.shields.io/npm/dt/react-hook-load.svg?style=for-the-badge)](https://www.npmjs.com/package/react-hook-load)
[![npm](https://img.shields.io/npm/l/react-hook-load?style=for-the-badge)](https://github.com/userdansilva/react-hook-load/blob/main/LICENSE)

### Installation

    npm install react-hook-load

### Usage

```jsx
import React from 'react';
import useLoad from 'react-hook-load';
import { useEffect } from 'react';

function App() {
  const { isLoading, startLoad, stopLoad } = useLoad();

  useEffect(() => {
    setTimeout(() => {
      stopLoad('page');
    }, 3000);
  });

  return (
    <div>
      <p>{isLoading('avatar') ? 'loading...' : 'Show avatar content'}</p>
      <div>
        <button onClick={() => startLoad('avatar')}>Start Load</button>
        <button onClick={() => stopLoad('avatar')}>Stop Load</button>
      </div>

      <section>
        {isLoading('page', true) ? 'loading...' : 'Show page content'}
      </section>
    </div>
  );
}

export default App;
```
