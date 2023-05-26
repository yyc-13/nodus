import VideoCard from "../../components/cards/VideoCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VideoCard> = {
  title: "card/VideoCard",
  component: VideoCard,
};

export default meta;
type Story = StoryObj<typeof VideoCard>;

export const Primary: Story = {};
