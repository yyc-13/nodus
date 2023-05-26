import Playground from "../components/Playground";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Playground> = {
  title: "base/Playground",
  component: Playground,
};

export default meta;
type Story = StoryObj<typeof Playground>;

export const Primary: Story = {};
