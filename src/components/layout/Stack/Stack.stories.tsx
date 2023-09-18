import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';

import { atomArgs } from '../../../helper/story/atomAgrs';

import { Stack } from '@components/layout/Stack/Stack';

const getStackAtomArgs = () => {
  const removeAtomArgs = ['display', 'gap', 'flexDirection'];

  const args = { ...atomArgs };
  removeAtomArgs.forEach((key) => delete args[key]);
  return args;
};

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    componentSubtitle:
      '하위 요소를 수직 또는 수평으로 정령하는 레이아웃입니다.',
    controls: {
      // exclude: /.*/g,
      include: ['direction', 'spacing'], // direction, spacing만 control에 표시
    },
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
    ...getStackAtomArgs(),
    as: { table: { disable: true } },
    ref: { table: { disable: true } },
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
  args: { direction: 'column', spacing: '2' },
  render: Template.bind({}),
};
export const Row: Story = {
  args: { direction: 'row', spacing: '4' },
  render: Template.bind({}),
};
