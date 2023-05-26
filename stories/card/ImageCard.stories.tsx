import ImageCard from "../../components/cards/ImageCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ImageCard> = {
  title: "card/ImageCard",
  component: ImageCard,
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const Primary: Story = {};
