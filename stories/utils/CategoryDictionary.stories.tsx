import CategoryDictionary from "../../components/utils/CategoryDictionary";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CategoryDictionary> = {
  title: "utils/CategoryDictionary",
  component: CategoryDictionary,
};

export default meta;
type Story = StoryObj<typeof CategoryDictionary>;

export const Primary: Story = {};
