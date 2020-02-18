import { constructCanvas } from './canvas/canvas';
import initialiseLabellerPopUp from './tools/labellerPopUp/buttons';
import { initialiseMachineLearningPopUp } from './tools/machineLearningPopUp/views/viewManager';
import initialiseExportLabelsPopUp from './tools/toolkit/buttonClickEvents/facadeWorkersUtils/exportDatasetsPopup/buttonClickEvents';
import assignToolkitButtonClickEvents from './tools/toolkit/buttonClickEvents/buttonClickEvents';
import { assignToolkitButtonHoverEvents } from './tools/toolkit/buttonHoverEvents/buttonHoverEvents';
import assignPassiveEventListeners from './tools/passiveEventListeners/passiveEventListeners';
import { initialiseWindowLayoutSetup } from './tools/styling/styling';
import { initialiseLabelListFunctionality } from './tools/labelList/labelList';
import { initialiseImageListFunctionality } from './tools/imageList/imageList';
import { initialiseImageSwitchPanelFunctionality } from './tools/imageSwitchPanel/style';
import registerGlobalKeyEventHandlers from './keyEventHandlers/keyEventHandlers';

constructCanvas();
initialiseLabellerPopUp();
initialiseMachineLearningPopUp();
initialiseExportLabelsPopUp();
assignToolkitButtonClickEvents();
assignToolkitButtonHoverEvents();
assignPassiveEventListeners();
initialiseWindowLayoutSetup();
initialiseLabelListFunctionality();
initialiseImageListFunctionality();
initialiseImageSwitchPanelFunctionality();
registerGlobalKeyEventHandlers();
