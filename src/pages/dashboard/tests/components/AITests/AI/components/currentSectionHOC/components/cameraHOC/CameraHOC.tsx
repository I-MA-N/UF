import usePhotoStore from "../../../../../../../store/photoStore";
import EditElem from "./editElem/EditElem";
import CameraElem from "./camera/CameraElem";
import { useEffect } from "react";

function CameraHOC() {
   const { image, removePhoto } = usePhotoStore(state => ({ image: state.image, removePhoto: state.removePhoto }));

   useEffect(() => {
      const scrollHandler = () => {
         window.scrollTo(0, 0);
      }

      document.documentElement.style.overflow = "hidden";
      window.scrollTo(0, 0);
      window.addEventListener("scroll", scrollHandler);

      return () => {
         document.documentElement.style.overflow = "auto";
         window.removeEventListener("scroll", scrollHandler);
         removePhoto();
      }
   }, [])

   return (
      <div className="w-full fixed top-0 left-0 z-30 bg-primary/80">
         <div className="w-full px-4 sm:container">
            {
               image
                  ?
                  <EditElem />
                  :
                  <CameraElem />
            }
         </div>
      </div>
   );
};

export default CameraHOC;