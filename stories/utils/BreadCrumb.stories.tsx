import BreadCrumb from "../../components/utils/BreadCrumb";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BreadCrumb> = {
  title: "utils/BreadCrumb",
  component: BreadCrumb,
};

export default meta;
type Story = StoryObj<typeof BreadCrumb>;

export const Primary: Story = {};
