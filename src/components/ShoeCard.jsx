import React from "react";

const ShoeCard = ({ shoe, changeImage, shownImage }) => {
  const handleImage = () => {
    changeImage(shoe.thumbnail);
  };
  return (
    <div
      className={`rounded-xl border-2 ${
        shownImage === shoe.thumbnail
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl flex-row sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={shoe.thumbnail}
          onClick={handleImage}
          width={127}
          height={103}
          alt="shoes"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
