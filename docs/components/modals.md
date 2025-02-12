---
title: Modals
---

Modals can also be created in Seyfert. They are created with a builder like other components do and then `TextInput` components, inside an `ActionRow`, are attached to it.

Here is an example of how to create a modal with two text inputs:

```ts twoslash showLineNumbers copy

import { Modal, TextInput, ActionRow } from 'seyfert';

import { TextInputStyle } from 'seyfert/lib/types';

const nameInput = new TextInput()
  .setCustomId('name')
  .setStyle(TextInputStyle.Short)
  .setLabel('Name');

const row1 = new ActionRow<TextInput>().setComponents([nameInput]);

const ageInput = new TextInput()
  .setCustomId('age')
  .setStyle(TextInputStyle.Short)
  .setLabel('Age');

const row2 = new ActionRow<TextInput>().setComponents([ageInput]);

const modal = new Modal()
  .setCustomId('mymodal')
  .setTitle('My Modal')
  .setComponents([row1, row2]);


```

## Handling Modals

To handle modals, as they aren't components, Seyfert provides `ModalCommmand` class which has the same logic as the `ComponentCommand` class.

```ts twoslash showLineNumbers copy

import { ModalCommand, type ModalContext } from 'seyfert';

export default class MyModal extends ModalCommand {
  filter(context: ModalContext) {
    return context.customId === 'mymodal';
  }

  async run(context: ModalContext) {
    const interaction = context.interaction;
    
    //we are getting the textinput values by passing their custom ids in the getInputValue method.

    const name = interaction.getInputValue('name', true);

    const age = interaction.getInputValue('age', true);

    return context.write({
      content: `You are ${name} and you have ${age} years`
    });
  }
}

```