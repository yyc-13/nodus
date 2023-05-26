// .storybook/withSessionProvider.js
import { SessionProvider } from "next-auth/react";
import React from "react";

const withSessionProvider = (Story, context) => {
  return (
    <SessionProvider session={context.args.session}>
      <Story {...context.args} />
    </SessionProvider>
  );
};

export default withSessionProvider;
