import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";

const BlogCard = ({ title, author, image, blog }) => {
  // Function to strip HTML tags from content
  // const stripHtmlTags = (htmlContent) => {
  //   return htmlContent.replace(/<[^>]*>?/gm, " ");
  // };
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex m-auto justify-center">
      <div className="relative border rounded-2xl shadow-lg w-full lg:w-8/12 h-52 lg:h-72 flex flex-row justify-around gap-5 lg:gap-10 m-0 lg:m-5 lg:ml-14 p-5 mt-5 bg-white overflow-hidden hover:shadow-xl">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red/70 via-black/50 to-transparent rounded-xl"></div>
        <div className="relative z-10 flex flex-col justify-between h-44 lg:h-64 w-full text-white">
          <div>
            <h1 className=" max-w-full lg:max-h-24 lg:text-2xl text-xl font-title font-semibold lg:font-semimedium overflow-hidden hover:cursor-pointer">
              {title}
            </h1>
            <div className="flex gap-2">
              <p className="text-xs text-stone-400 lg:text-base font-subtitle border-l-4 border-stone-500 pl-2 mt-2 font-extralight">
                by {author}
              </p>
              <p className="text-xs text-stone-400 lg:text-base font-subtitle pl-2 mt-2 font-extralight">
                {formatCreatedAt(blog.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <button className="bg-stone-950 text-white h-8 lg:h-10 w-28 lg:w-40 text-xs lg:text-sm p-1 font-subtitle rounded-md font-light items-end">
              <Link to={`/fullblog/${blog._id}`}>
                Read <TrendingFlatRoundedIcon className="ml-1" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  blog: PropTypes.number.isRequired,
  content: PropTypes.string,
};

export default BlogCard;
