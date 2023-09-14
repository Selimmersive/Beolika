import { FaRegStar, FaStar } from "react-icons/fa";

export default function GetRatings({ value, className }: { value: number; className: string }) {
  const totalRatings = [0, 0, 0, 0, 0];
  for (let i = 0; i < Math.round(value); i++) {
    totalRatings[i] = 1;
  }
  return (
    <div className="flex items-center space-x-1">
      {totalRatings.map((rating, index) => {
        if (rating === 1) {
          return <FaStar key={index} className={className} />;
        }
        return <FaRegStar key={index} className={className} />;
      })}
    </div>
  );
}
