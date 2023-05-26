import TopNav from "../components/layout/TopNav";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TopNav> = {
  title: "base/TopNav",
  component: TopNav,
};

export default meta;
type Story = StoryObj<typeof TopNav>;

export const Primary: Story = {};
