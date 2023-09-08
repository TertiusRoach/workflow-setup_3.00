import { select } from 'back-end/tools/select';

export namespace GridDefaultHeader {
  export function eventsFor(blockName: String | 'default-header') {
    $('#login-button').on('click', () => {
      select.button(document.getElementById('login-button'));
      select.section(document.getElementById('login-section'));
    });
    $('#signup-button').on('click', () => {
      select.button(document.getElementById('signup-button'));
      select.section(document.getElementById('signup-section'));
      console.log('jkasdfjkasdfljkasdfjlkasdfjklsdaf');
    });

    console.log(`--${blockName} Loaded`);
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
