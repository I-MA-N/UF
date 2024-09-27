import { useEffect, useRef } from "react";
import { drawOnCanvas } from "../../../../../../../../../utils/AIFuncs";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

type ImageBiggerModalProps = {
    isSide: boolean,
    landmarks: NormalizedLandmark[],
    showLandmarks: boolean,
    sectionNameFA: string,
    src: string,
    setShowImageBigger: React.Dispatch<React.SetStateAction<boolean>>
}

function ImageBiggerModal({ isSide, landmarks, showLandmarks, sectionNameFA, src, setShowImageBigger }: ImageBiggerModalProps) {
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const img = imgRef.current;
        
        if (img) {
            drawOnCanvas(canvasRef, img.clientWidth, img.clientHeight, img.clientWidth >= 600 ? 2 : 1, ["#fff", "#fff"], undefined, showLandmarks ? landmarks : undefined, isSide);
        }
    }, [isSide, showLandmarks, imgRef.current?.clientWidth])

    return (
        <div className="modal">
            <div className="w-full px-4 sm:px-0 sm:container md:!max-w-3xl">
                <div className="w-full relative flex justify-center mb-4 lg:mb-6">
                    <button
                        type="button"
                        className="size-11 lg:size-14 flex items-center justify-center bg-primary absolute right-4 top-1/2 -translate-y-1/2 text-yellow border border-yellow rounded-full"
                        onClick={() => setShowImageBigger(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="size-4 lg:size-5">
                            <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <span className="lg:text-xl">عکس {sectionNameFA}</span>
                </div>

                <div className="bg-primary px-4 py-9 rounded-[32px] border-2">
                    <div className="relative">
                        <img
                            ref={imgRef}
                            src={src}
                            alt="sample image for this section"
                            className="w-full mx-auto rounded-3xl"
                        />

                        <canvas
                            ref={canvasRef}
                            className="absolute top-0 left-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageBiggerModal;