import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';

import Box from '@components/layout/Box';

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    componentSubtitle: '박스 레이아웃입니다.',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      description: `렌더링될 태그를 결정합니다.<br /> (control에 있는 tag 외에도 선택 가능)`,
      options: ['div', 'p', 'section', 'article'],
      control: 'radio',
      table: { defaultValue: { summary: 'div' } },
      defaultValue: 'div',
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof Box>;
type StoryComponent = StoryFn<typeof Box>;

const Template: StoryComponent = (args) => (
  <Box {...args}>{`<${args.as}> 태그로 렌더링됩니다.`}</Box>
);

export const Default: Story = {
  args: { as: 'div' },
  render: Template.bind({}),
};
export const P: Story = {
  args: { as: 'p' },
  render: Template.bind({}),
};

export const Section: Story = {
  args: { as: 'section' },
  render: Template.bind({}),
};
