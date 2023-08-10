const base_url = "http://image.tmdb.org/t/p/";

const sizes = {
  small: "w342",
  medium: "w500",
  large: "w780",
  org: "original",
};

export default (path, size = "medium") => {
  return base_url + sizes[size] + path;
};
