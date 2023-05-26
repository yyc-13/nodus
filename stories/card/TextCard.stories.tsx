import TextCard from "../../components/cards/TextCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextCard> = {
  title: "card/TextCard",
  component: TextCard,
};

export default meta;
type Story = StoryObj<typeof TextCard>;

export const Primary: Story = {};
