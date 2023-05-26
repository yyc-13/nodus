import Carousel from "../../components/utils/Carousel";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Carousel> = {
  title: "utils/Carousel",
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {};
