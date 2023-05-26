import PaidImage from "../../components/content-page/PaidImage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PaidImage> = {
  title: "content-page/paid/PaidImage",
  component: PaidImage,
};

export default meta;
type Story = StoryObj<typeof PaidImage>;

export const Primary: Story = {};
