import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, consequatur molestias amet mollitia sit nostrum repellat quis temporibus hic at eos illum tenetur minus voluptatum adipisci harum, ducimus earum nisi.',
};

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Text',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, consequatur molestias amet mollitia sit nostrum repellat quis temporibus hic at eos illum tenetur minus voluptatum adipisci harum, ducimus earum nisi.',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Text',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, consequatur molestias amet mollitia sit nostrum repellat quis temporibus hic at eos illum tenetur minus voluptatum adipisci harum, ducimus earum nisi.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, consequatur molestias amet mollitia sit nostrum repellat quis temporibus hic at eos illum tenetur minus voluptatum adipisci harum, ducimus earum nisi.',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Text',
};

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, consequatur molestias amet mollitia sit nostrum repellat quis temporibus hic at eos illum tenetur minus voluptatum adipisci harum, ducimus earum nisi.',
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
