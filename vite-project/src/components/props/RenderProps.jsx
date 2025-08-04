// React में render props एक ऐसा pattern है जहाँ हम एक function को prop के रूप में पास करते हैं,
// और वो function JSX (UI) को return करता है।

import { useState } from "react";

function RenderProps({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

export default RenderProps;