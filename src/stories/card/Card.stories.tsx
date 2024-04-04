import type { Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { Card, CardType } from './Card'
import { options } from './constants'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    // color: 'primary',
    children: 'This is default',
  },
} satisfies Meta<typeof Card>

export default meta
// type Story = StoryObj<typeof meta>

// type ArgsType = {
//   args: CardType['args']
// }

const Template = (args: CardType) => <Card {...args} />

export const Default = Template.bind({})
export const Clickable = Template.bind({})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Clickable.args = {
  isClickable: true,
}
export const Dragable = Template.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Dragable.args = {
  isDragable: true,
}

const convertType = Object.keys(options).map((keyOption: string) => {
  const arr = options[keyOption as keyof typeof options].map((item) => {
    return [{ [keyOption]: item }]
  })

  return arr.flat()
})

const ListTemplate = ({ items, ...args }: { items: typeof convertType }) => {
  return items.map((item, index) => {
    return <Card key={index} {...args} {...item} />
  })
}

export const Colors = ListTemplate.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Colors.args = {
  items: options.colors.map((color) => ({ color })),
}

export const Sizes = ListTemplate.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Sizes.args = {
  items: options.size.map((size) => ({ size })),
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
