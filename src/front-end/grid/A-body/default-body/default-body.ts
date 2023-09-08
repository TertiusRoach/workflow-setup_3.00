import { GetDesign } from 'back-end/utilities/GetDesign';
export namespace GridDefaultBody {
  export function eventsFor(blockName: String | 'default-body') {
    //--|▼| Grid Page|▼|--//
    new GetDesign.forPage('default-overlay');
    new GetDesign.forPage('default-header');
    new GetDesign.forPage('default-footer');
    new GetDesign.forPage('default-leftbar');
    new GetDesign.forPage('default-rightbar');
    new GetDesign.forPage('default-main');
    new GetDesign.forPage('default-data');

    console.log(`--${blockName} Loaded`);
    //--► console.log(`--${blockName} Loaded`); ◄--//
  }
}
