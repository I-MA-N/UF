import SectionNames from "../../../../../../../../../types/SectionNames";

type ImageModalProps = {
   sectionName: SectionNames,
   sectionNameFA: string,
   setShowImage: React.Dispatch<React.SetStateAction<boolean>>
}

function ImageModal({ sectionName, sectionNameFA, setShowImage }: ImageModalProps) {
   return (
      <div
         className="modal"
         onClick={() => setShowImage(false)}
      >
         <div>
            <p className="text-sm lg:text-base text-center mb-4">{sectionNameFA}</p>

            <div className="bg-primary px-4 py-9 rounded-[32px] border-2">
               <img
                  src={`/images/sampleImages/${sectionName}.png`}
                  className="rounded-lg max-h-[500px]"
                  alt="عکس نمونه برای این قسمت یافت نشد!"
               />
            </div>
         </div>
      </div>
   );
};

export default ImageModal;