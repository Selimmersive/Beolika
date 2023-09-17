"use client";
import clsx from "clsx";
import { FormEvent, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { API_URL } from "@/utils/urls";
import { ProductDto } from "@/utils/api/dto/productDto";
import { useRouter } from "next/navigation";
import { dateFormat } from "@/utils/utils";
import GetRatings from "@/utils/getRating";

export default function Reviews({ data }: { data: ProductDto }) {
  const router = useRouter();
  const { reviews } = data.attributes;
  const [isWriteReview, setIsWriteReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [showMore, setShowMore] = useState(5);
  const [stars, setStars] = useState([
    { id: 1, checked: false, hovered: false },
    { id: 2, checked: false, hovered: false },
    { id: 3, checked: false, hovered: false },
    { id: 4, checked: false, hovered: false },
    { id: 5, checked: false, hovered: false },
  ]);

  reviews.data.sort((a, b) => Number(new Date(b.attributes.publishedAt)) - Number(new Date(a.attributes.publishedAt)));

  const loadMoreReviews = () => {
    setShowMore((prevShowMore) => prevShowMore + 5);
  };

  const handleCheck = (id: number) => {
    setRating(id);
    setStars((prev) =>
      prev.map((star) => {
        if (star.id <= id) {
          return { ...star, checked: true };
        }
        return { ...star, checked: false };
      })
    );
  };

  const handleHovered = (id?: number) => {
    setStars((prev) =>
      prev.map((star) => {
        if (id) {
          return star.id <= id ? { ...star, hovered: true } : star;
        }
        return { ...star, hovered: false };
      })
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !rating) {
      console.log("Please fill in all required fields.");
      return;
    }

    return fetch(`${API_URL}/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: name,
          rating: rating,
          title: title,
          comment: comment,
          product: data,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return console.log(response.statusText);
        } else {
          console.log("Review added successfuly!");
          setIsWriteReview(false);
          setComment("");
          setName("");
          setTitle("");
          setRating(0);
          setStars((prev) =>
            prev.map((star) => {
              return { ...star, checked: false };
            })
          );
        }
      })
      .then(() => {
        router.refresh();
      });
  };

  return (
    <div className="pb-10">
      <div
        className={clsx("flex items-center justify-center space-x-4 pt-10", "lg:justify-start", "2xl:pt-20", {
          hidden: isWriteReview,
        })}>
        <button
          type="button"
          /* onClick={createReview} */
          onClick={() => setIsWriteReview(true)}
          className={clsx("w-full border py-3 text-center text-lg font-bold uppercase transition-all delay-75 hover:scale-105", "lg:w-[250px]")}>
          write review
        </button>
      </div>

      {isWriteReview && (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 pb-10 pt-20">
          <h5 className={clsx("text-3xl font-bold")}>Rate your experience :*</h5>
          <div className="flex items-center pb-2">
            {stars.map((star) => (
              <div
                key={star.id}
                className="cursor-pointer text-3xl 2xl:text-4xl"
                onMouseEnter={() => {
                  handleHovered(star.id);
                }}
                onMouseLeave={() => {
                  handleHovered();
                }}
                onClick={() => {
                  handleCheck(star.id);
                }}>
                {star.checked || star.hovered ? <FaStar className="text-white" /> : <FaRegStar />}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={name}
            required
            placeholder="Name*"
            onChange={(e) => setName(e.target.value)}
            className={clsx(
              "form-input w-full rounded border-gray-200 bg-transparent p-4 text-lg placeholder:text-gray-300 focus:border-white focus:ring-white",
              "lg:h-10 lg:w-[500px] lg:p-6",
              "2xl:p-8"
            )}></input>
          <input
            type="text"
            value={title}
            placeholder="Evaluation title (optional)"
            onChange={(e) => setTitle(e.target.value)}
            className={clsx(
              "form-input w-full rounded border-gray-200 bg-transparent p-4 text-lg placeholder:text-gray-300 focus:border-white focus:ring-white",
              "lg:h-10 lg:w-[500px] lg:p-6",
              "2xl:p-8"
            )}></input>
          <textarea
            value={comment}
            placeholder="What did you think? (optional)"
            onChange={(e) => setComment(e.target.value)}
            className={clsx(
              "form-textarea w-full rounded border-gray-200 bg-transparent p-4 text-lg placeholder:text-gray-300 focus:border-white focus:ring-white",
              "lg:w-[500px] lg:p-6",
              "2xl:p-8"
            )}></textarea>
          <button
            type="submit"
            className={clsx("w-full border py-3 text-center text-lg font-bold uppercase transition-all delay-75 hover:scale-105", "lg:w-[500px]")}>
            Add a review
          </button>
        </form>
      )}

      {reviews.data.length ? (
        reviews.data.slice(0, showMore).map((review, index) => (
          <div key={index} className={clsx("space-y-4 border-b py-6", "lg:space-y-4 lg:py-10")}>
            <div className={clsx("flex items-center justify-between space-x-3")}>
              <span className={clsx("text-xl", "lg:text-2xl")}>{review?.attributes.name}</span>
              <p className={clsx("lg:text-lg")}>{dateFormat(new Date(review.attributes.publishedAt))}</p>
            </div>
            <GetRatings value={review.attributes.rating} className="text-xl" />
            <div className={clsx("space-y-2")}>
              <h4 className={clsx("text-xl font-bold", "lg:text-2xl")}>{review.attributes.title}</h4>
              <div className={clsx("text-lg", "lg:text-[22px]")}>
                {review?.attributes.comment ? <p>{review.attributes.comment}</p> : <span className={clsx("font-thing italic")}>No comment</span>}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={clsx("flex justify-center py-2 text-lg", "md:text-xl", "lg:py-20 lg:text-[22px]", "2xl:text-2xl")}>
          No reviews at the moment
        </div>
      )}

      {reviews.data.length > showMore && (
        <div className={clsx("flex items-center justify-center space-x-4 pt-10", "2xl:pt-20")}>
          <button
            type="button"
            onClick={loadMoreReviews}
            className={clsx(
              "w-full bg-white py-3 text-center text-lg font-bold uppercase text-[var(--color-primary)] transition-all delay-75 hover:scale-105",
              "lg:w-[250px]"
            )}>
            See more
          </button>
        </div>
      )}
    </div>
  );
}
