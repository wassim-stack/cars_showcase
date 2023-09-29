"use client";
import { ShowMorePropts } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMorePropts) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="show more"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
          btnType="button"
        />
      )}
    </div>
  );
};

export default ShowMore;
