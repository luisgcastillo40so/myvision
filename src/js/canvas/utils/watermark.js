let watermarkDisplayed = false;

function drawWatermarkOnCanvasAreaBackground() {
  if (watermarkDisplayed) return;
  const canvasWrapperParentElement = document.getElementById('canvas-wrapper-parent');
  canvasWrapperParentElement.style.backgroundImage = 'url(\'presenting 32.svg\')';
  /*
    background: url(presenting\ 9.svg);
    background: url(presenting\ 30.svg);
    background: url(presenting\ 31.svg);
    background: url(presenting\ 32.svg);
  */
  canvasWrapperParentElement.style.backgroundAttachment = 'fixed';
  canvasWrapperParentElement.style.backgroundPosition = 'center';
  canvasWrapperParentElement.style.backgroundPositionX = 'calc((100% - 210px - (59px / var(--screen-size-delta))) / 2 + 70px)';
  canvasWrapperParentElement.style.backgroundSize = '500px 220px';
  canvasWrapperParentElement.style.backgroundRepeat = 'no-repeat';
  watermarkDisplayed = true;
}

function removeWatermarkFromCanvasAreaBackground() {
  if (!watermarkDisplayed) return;
  const canvasWrapperParentElement = document.getElementById('canvas-wrapper-parent');
  canvasWrapperParentElement.style.backgroundImage = '';
  canvasWrapperParentElement.style.backgroundAttachment = '';
  canvasWrapperParentElement.style.backgroundPosition = '';
  canvasWrapperParentElement.style.backgroundPositionX = '';
  canvasWrapperParentElement.style.backgroundSize = '';
  canvasWrapperParentElement.style.backgroundRepeat = '';
  watermarkDisplayed = false;
}

export { drawWatermarkOnCanvasAreaBackground, removeWatermarkFromCanvasAreaBackground };
