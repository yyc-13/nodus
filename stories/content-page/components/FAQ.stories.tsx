import FAQ from "../../../components/content-page/components/FAQ";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FAQ> = {
  title: "content-page/components/FAQ",
  component: FAQ,
};

export default meta;
type Story = StoryObj<typeof FAQ>;

export const Primary: Story = {};
