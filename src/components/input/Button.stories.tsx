import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/input/Button';
import { Stack } from '@components/layout/Stack';

const meta = {
  title: 'Input/Button',
  component: Button,
  parameters: {
    componentSubtitle: '버튼',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Stack spacing="4" direction="row" alignItems="flex-end">
        <Story />
      </Stack>
    ),
  ],
  args: {
    children: '버튼',
    size: 'm',
    color: 'primary',
    variant: 'contained',
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    size: {
      description: '버튼의 크기를 결정합니다.',
      control: 'radio',
      options: ['s', 'm', 'l'],
      table: { defaultValue: { summary: 'm' } },
    },
    color: {
      description: '버튼의 색상을 결정합니다.',
      control: 'radio',
      options: ['primary', 'secondary'],
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      description: '버튼의 형태를 결정합니다.',
      control: 'radio',
      options: ['contained', 'outlined', 'text'],
      table: { defaultValue: { summary: 'contained' } },
    },
    disabled: {
      description: '버튼의 비활성화 여부를 결정합니다.',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    fullWidth: {
      description: '버튼의 너비를 꽉 채울지 여부를 결정합니다.',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    children: {
      description: 'ReactNode',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Size: Story = {
  args: { variant: 'outlined' },
  argTypes: {
    size: { table: { disable: true } },
  },
  render: (args) => (
    <>
      <Button {...args} size="s">
        Small
      </Button>
      <Button {...args} size="m">
        Medium
      </Button>
      <Button {...args} size="l">
        Large
      </Button>
    </>
  ),
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
  argTypes: {
    color: { table: { disable: true } },
  },
  render: (args) => (
    <>
      <Button {...args}>Contained</Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        text
      </Button>
      <Button {...args} disabled>
        Contained
      </Button>
      <Button {...args} variant="outlined" disabled>
        Outlined
      </Button>
      <Button {...args} variant="text" disabled>
        text
      </Button>
    </>
  ),
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
  argTypes: {
    color: { table: { disable: true } },
  },
  render: (args) => (
    <>
      <Button {...args}>Contained</Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        text
      </Button>
      <Button {...args} disabled>
        Contained
      </Button>
      <Button {...args} variant="outlined" disabled>
        Outlined
      </Button>
      <Button {...args} variant="text" disabled>
        text
      </Button>
    </>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'FullWidthButton',
  },
};
