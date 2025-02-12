---
title: Modals
---
En Seyfert también se pueden crear modals. Se crean con un constructor como otros componentes y luego se adjuntan componentes [`TextInput`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/Modal.ts#L113) dentro de un [`ActionRow`](https://github.com/tiramisulabs/seyfert/blob/455ed12b0ebcb3ddf55bc8b3274b0ce904becc62/src/builders/ActionRow.ts#L16).

Aquí tienes un ejemplo de cómo crear un modal con dos campos de texto:

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

## Manejo de los Modals

Para manejar modales, dado que no son componentes, Seyfert ofrece la clase `ModalCommand` que tiene la misma lógica que la clase `ComponentCommand`.

```ts twoslash showLineNumbers copy

import { ModalCommand, type ModalContext } from 'seyfert';

export default class MyModal extends ModalCommand {
  filter(context: ModalContext) {
    return context.customId === 'mymodal';
  }

  async run(context: ModalContext) {
    const interaction = context.interaction;

    // estamos obteniendo los valores de los campos de texto pasando sus ID personalizados en el método `getInputValue`.

    const name = interaction.getInputValue('name', true);

    const age = interaction.getInputValue('age', true);

    return context.write({
      content: `You are ${name} and have ${age} years`
    });
  }
}

```