import type { Meta, StoryFn } from '@storybook/react';
import { StoryObj } from '@storybook/react';

import Stack from '@components/layout/Legacy/LegacyStack/index.ts';

const meta = {
  title: 'Layout/LegacyStack',
  component: Stack,
  parameters: {
    componentSubtitle:
      '하위 요소를 수직 또는 수평으로 정령하는 레이아웃입니다.',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      description: '요소가 배치되는 방향을 결정합니다.',
      table: { defaultValue: { summary: 'column' } },
    },
    spacing: {
      description: '요소 사이의 간격을 설정합니다.',
      table: { defaultValue: { summary: 0 } },
    },
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof Stack>;
type StoryComponent = StoryFn<typeof Stack>;

const Template: StoryComponent = (args) => (
  <Stack {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const Column: Story = {
  args: { direction: 'column', spacing: 10 },
  render: Template.bind({}),
};
export const Row: Story = {
  args: { direction: 'row', spacing: 10 },
  render: Template.bind({}),
};
