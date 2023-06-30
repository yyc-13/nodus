// wagmi issue https://github.com/wagmi-dev/wagmi/issues/542

import * as React from "react";

export const useIsMounted = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted;
};
