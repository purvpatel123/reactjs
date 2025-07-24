import React, { Suspense, lazy, useState } from 'react';
import SkeletonModel from './SkeletonModel';
const Watch = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import('../useEffects/DegitalWatch')), 2000);
  })
);

function LazyLoad() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>React Lazy Loading with Custom Loader</h1>
      <button onClick={() => setShow(true)}>Load Heavy Component</button>

      {show && (
        <Suspense fallback={<SkeletonModel />}>
          <Watch />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoad;
