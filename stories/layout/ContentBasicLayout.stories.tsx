import ContentBasicLayout from "../../components/layout/BasicContentLayout";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContentBasicLayout> = {
  title: "Layout/ContentBasicLayout",
  component: ContentBasicLayout,
};

export default meta;
type Story = StoryObj<typeof ContentBasicLayout>;

export const Primary: Story = {};
