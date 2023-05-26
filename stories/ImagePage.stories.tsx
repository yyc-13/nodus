import ImagePage from "../components/ImagePage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ImagePage> = {
  title: "base/ImagePage",
  component: ImagePage,
};

export default meta;
type Story = StoryObj<typeof ImagePage>;

export const Primary: Story = {};
