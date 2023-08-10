import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieLoading = () => {
  return (
    <div>
      <Skeleton width={342} height={350} />
      <Skeleton height={25} className="mt-2" width={"80% "}></Skeleton>
      <div className="grid grid-cols-3 gap-5 mt-2">
        <Skeleton height={25}></Skeleton>
        <Skeleton height={25}></Skeleton>
        <Skeleton height={25}></Skeleton>
      </div>
    </div>
  );
};

export default MovieLoading;
