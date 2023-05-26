import Sidebar from "../components/layout/Sidebar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "base/Sidebar",
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {};
