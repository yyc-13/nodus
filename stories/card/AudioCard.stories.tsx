import AudioCard from "../../components/cards/AudioCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AudioCard> = {
  title: "card/AudioCard",
  component: AudioCard,
};

export default meta;
type Story = StoryObj<typeof AudioCard>;

export const Primary: Story = {};
