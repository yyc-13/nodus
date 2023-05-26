import FreeImage from "../../../components/content-page/FreeImage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FreeImage> = {
  title: "content-page/free/FreeImage",
  component: FreeImage,
};

export default meta;
type Story = StoryObj<typeof FreeImage>;

export const Primary: Story = {};
