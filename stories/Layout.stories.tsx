import Layout from "../components/layout/Layout";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Layout> = {
  title: "base/Layout",
  component: Layout,
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Primary: Story = {};
