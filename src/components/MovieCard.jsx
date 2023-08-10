import getImageURL from "../util/getImageURL";
import StarImg from "../star-fill.png";
const MovieCard = ({
  poster_path,
  id,
  release_date,
  vote_average,
  title,
  media_type,
  name,
}) => {
  return (
    <div className="bg-slate-600 group transition duration-300 hover:bg-slate-300 grid grid-rows-[auto_1fr_auto] cursor-pointer rounded-xl p-2">
      <img
        className="rounded-xl"
        src={getImageURL(poster_path, "small")}
        alt=""
      />
      <h3 className="text-center mt-4 group-hover:text-slate-600 text-slate-200 text-3xl">
        {media_type == "tv" ? name : title}
      </h3>
      <div className="text-slate-400 px-5 py-2 text-xl flex justify-between mt-5">
        <span>{media_type}</span>
        <span className="flex gap-2">
          <img src={StarImg} alt="" />
          {vote_average?.toFixed(1)}
        </span>
        <span>{release_date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
