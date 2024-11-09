import usePhotoStore from "../../../../../../store/photoStore";

let deltaX = 0;
let deltaY = 0;
let isFirstMove = false;

export const circleDown = (
   pageX: number,
   pageY: number,
   circleElem: HTMLDivElement,
) => {
   const setIsMovingLandmark = usePhotoStore.getState().setIsMovingLandmark;

   setIsMovingLandmark(true);
   isFirstMove = true;

   const circleRect = circleElem.getBoundingClientRect();
   const offsetX = pageX - circleRect.left;
   const offsetY = pageY - circleRect.top;
   deltaX = offsetX - (circleRect.width / 2);
   deltaY = offsetY - (circleRect.height / 2);
}

export const circleUp = () => {
   const setIsMovingLandmark = usePhotoStore.getState().setIsMovingLandmark;
   setIsMovingLandmark(false);
}

export const circleMove = (
   circleElem: HTMLDivElement,
   pageX: number,
   pageY: number,
   canvasElem: HTMLCanvasElement,
   selectedLandmark: number,
) => {
   const isMovingLandmark = usePhotoStore.getState().isMovingLandmark;
   const zoomElem = document.getElementById("zoomElem") as HTMLDivElement | null;

   if (isMovingLandmark && zoomElem) {
      const canvasRect = canvasElem.getBoundingClientRect();

      const imageWidth = canvasRect.width;
      const imageHeight = canvasRect.height;
      const imageLeft = pageX - canvasRect.left - deltaX;
      const imageTop = pageY - canvasRect.top - deltaY;

      const isOutOfCanvasX = imageLeft >= imageWidth || imageLeft <= 0;
      const isOutOfCanvasY = imageTop >= imageHeight || imageTop <= 0;

      if (!isOutOfCanvasX && !isOutOfCanvasY) {
         const circleRect = circleElem.getBoundingClientRect();

         const circleLeft = imageLeft - (circleRect.width / 2);
         const circleTop = imageTop - (circleRect.height / 2);

         const ratioX = zoomElem.clientWidth / circleRect.width;
         const ratioY = zoomElem.clientHeight / circleRect.height;

         setZoomElemImage(isFirstMove, imageWidth, imageHeight, ratioX, ratioY);

         if (selectedLandmark === 38) {
            // Set 'x' position of 'zoomElem' only once when editing '38' landmark
            if (isFirstMove) {
               zoomElem.style.backgroundPositionX = `-${circleLeft * ratioX}px`;
            }
            zoomElem.style.backgroundPositionY = `-${circleTop * ratioY}px`;

            circleElem.style.top = `${circleTop}px`;
         } else {
            // If we move out of 'left' or 'top' edge of image, we should change values
            if (circleLeft * ratioX < 0) {
               zoomElem.style.backgroundPosition = `${-(circleLeft * ratioX)}px -${circleTop * ratioY}px`;
            } else if (circleTop * ratioY < 0) {
               zoomElem.style.backgroundPosition = `-${circleLeft * ratioX}px ${-(circleTop * ratioY)}px`;
            } else {
               zoomElem.style.backgroundPosition = `-${circleLeft * ratioX}px -${circleTop * ratioY}px`;
            }

            circleElem.style.left = `${circleLeft}px`;
            circleElem.style.top = `${circleTop}px`;
         }

         setLandmarksPositions(selectedLandmark, imageLeft, imageTop, imageWidth, imageHeight);

         if (isFirstMove) isFirstMove = false;
      }
   }
}

// Used in 'circleMove' function
function setLandmarksPositions(
   selectedLandmark: number,
   imageLeft: number, imageTop: number,
   imageWidth: number, imageHeight: number
) {
   const { landmarks, setLandmarks } = usePhotoStore.getState();

   if (selectedLandmark === 38) {
      landmarks[selectedLandmark].y = imageTop / imageHeight;
   } else {
      landmarks[selectedLandmark].x = imageLeft / imageWidth;
      landmarks[selectedLandmark].y = imageTop / imageHeight;
   
      if (selectedLandmark === 39) {
         landmarks[38].x = imageLeft / imageWidth;
      }
   }

   setLandmarks(landmarks);
}

// Used in 'circleMove' function
function setZoomElemImage(
   isFirstMove: boolean,
   imageWidth: number, imageHeight: number,
   ratioX: number, ratioY: number
) {
   if (isFirstMove) {
      const imgElem = document.getElementById("editImage") as HTMLImageElement | null;
      const zoomElem = document.getElementById("zoomElem") as HTMLDivElement | null;
   
      if (imgElem && zoomElem) {
         zoomElem.style.backgroundImage = `url(${imgElem.src})`;
         zoomElem.style.backgroundSize = `${imageWidth * ratioX}px ${imageHeight * ratioY}px`;
      }
   }
}