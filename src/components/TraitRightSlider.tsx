import { Dispatch, SetStateAction } from "react";
import RightSlider from "@/components/RightSlider";
import TraitCard from "@/components/TraitCard";
import { Grenze_Gotisch } from "next/font/google";

const grenze = Grenze_Gotisch({ subsets: ["latin"], weight: ["400"] });

const TraitRightSlider = ({
  isSliderOpen,
  setIsSliderOpen,
  selectedTrait,
  action,
}: {
  isSliderOpen: boolean;
  setIsSliderOpen: Dispatch<SetStateAction<boolean>>;
  selectedTrait: {
    type: string;
    name: string;
    equipped: boolean;
  };
  action?: {
    label: string;
    callback: () => void;
  };
}) => {
  return (
    <RightSlider
      open={isSliderOpen}
      setOpen={setIsSliderOpen}
      useInnerPadding={false}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col p-4">
          <h1 className={`${grenze.className} text-white text-4xl mb-2`}>
            Trait #0001
          </h1>
          <span className="uppercase text-white/50 text-xs mb-4 block">
            type: {selectedTrait!.type}
          </span>
          <TraitCard trait={selectedTrait!} />
        </div>
        {action && (
          <button
            className="w-full border-t border-white/30 text-white uppercase fixed bottom-0 py-4"
            onClick={() => action.callback()}
          >
            {action.label}
          </button>
        )}
      </div>
    </RightSlider>
  );
};

export default TraitRightSlider;
