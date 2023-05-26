import UploadModal from "../../components/deprecated/UploadModal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UploadModal> = {
  title: "utils/UploadModal",
  component: UploadModal,
};

export default meta;
type Story = StoryObj<typeof UploadModal>;

export const Primary: Story = {};
