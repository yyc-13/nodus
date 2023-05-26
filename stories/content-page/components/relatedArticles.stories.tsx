import RelatedArticles from "../../../components/utils/RelatedArticles";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RelatedArticles> = {
  title: "content-page/components/RelatedArticles",
  component: RelatedArticles,
};

export default meta;
type Story = StoryObj<typeof RelatedArticles>;

export const Primary: Story = {};
