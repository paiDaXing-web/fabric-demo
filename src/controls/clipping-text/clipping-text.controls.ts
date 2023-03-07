import * as fabric from 'fabric';
import { uploadImageHandler } from '../clipping-mask/clipping-mask.controls.handlers';
import { renderUploadHandler } from '../clipping-mask/clipping-mask.controls.renders';
import {
  cornerBL, cornerBR, cornerML, cornerMR, cornerTL, cornerTR, editClippingTextHandler, scalingEqually, scalingX,
} from './clipping-text.controls.handlers';
import { renderEditClippingTextHandler } from './clipping-text.controls.renders';

const {
  scaleCursorStyleHandler,
  renderCircleControl,
  scaleSkewCursorStyleHandler: scaleSkewStyleHandler,
  scaleOrSkewActionName,
  // @ts-ignore
} = fabric.controlsUtils;

const { controls } = fabric.Object.prototype;

export const editClippingTextControl = new fabric.Control({
  x: 0,
  y: -0.5,
  offsetY: -60,
  cursorStyle: 'pointer',
  mouseDownHandler: editClippingTextHandler,
  render: renderEditClippingTextHandler,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const uploadControl = new fabric.Control({
  // @ts-ignore
  name: 'upload',
  x: 0,
  y: 0,
  cursorStyle: 'pointer',
  mouseDownHandler: uploadImageHandler,
  render: renderUploadHandler,
  // @ts-ignore
  ignoreRotate: true,
});

export const defaultControls = {
  tl: controls.tl,
  tr: controls.tr,
  bl: controls.bl,
  br: controls.br,
  mtr: controls.mtr,
  ml: fabric.Textbox.prototype.controls.ml,
  mr: fabric.Textbox.prototype.controls.mr,
  e: editClippingTextControl,
  // upload: uploadControl,
  // tooltip: controls.tooltip,
};

export const cropControls = {
  tlS: new fabric.Control({
    x: -0.5,
    y: -0.5,
    // @ts-ignore
    name: 'tlS',
    cursorStyleHandler: scaleCursorStyleHandler,
    // @ts-ignore
    positionHandler: cornerTL,
    actionHandler: scalingEqually,
    render: renderCircleControl,
  }),
  trS: new fabric.Control({
    x: 0.5,
    y: -0.5,
    // @ts-ignore
    name: 'trS',
    cursorStyleHandler: scaleCursorStyleHandler,
    // @ts-ignore
    positionHandler: cornerTR,
    actionHandler: scalingEqually,
    render: renderCircleControl,
  }),
  blS: new fabric.Control({
    x: -0.5,
    y: 0.5,
    // @ts-ignore
    name: 'blS',
    cursorStyleHandler: scaleCursorStyleHandler,
    // @ts-ignore
    positionHandler: cornerBL,
    actionHandler: scalingEqually,
    render: renderCircleControl,
  }),
  brS: new fabric.Control({
    x: 0.5,
    y: 0.5,
    // @ts-ignore
    name: 'brS',
    cursorStyleHandler: scaleCursorStyleHandler,
    // @ts-ignore
    positionHandler: cornerBR,
    actionHandler: scalingEqually,
    render: renderCircleControl,
    // getActionName: scaleOrSkewActionName,
  }),

  mlS: new fabric.Control({
    x: -0.5,
    y: 0,
    // @ts-ignore
    name: 'mlS',
    cursorStyleHandler: scaleSkewStyleHandler,
    // @ts-ignore
    positionHandler: cornerML,
    actionHandler: scalingX,
    render: renderCircleControl,
    getActionName: scaleOrSkewActionName,
  }),
  mrS: new fabric.Control({
    x: 0.5,
    y: 0,
    // @ts-ignore
    name: 'mrS',
    cursorStyleHandler: scaleSkewStyleHandler,
    // @ts-ignore
    positionHandler: cornerMR,
    actionHandler: scalingX,
    render: renderCircleControl,
    getActionName: scaleOrSkewActionName,
  }),
};
