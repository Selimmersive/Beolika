"use client";
import clsx from "clsx";
import { useState } from "react";
import { ProductDto } from "@/utils/api/dto/productDto";
import { dateFormat } from "@/utils/utils";
import GetRatings from "@/utils/getRating";
import ReviewsForm from "@/components/ui/Form";

export default function Reviews({ data }: { data: ProductDto }) {
  const { reviews } = data.attributes;
  const [isOpenReviewForm, setIsOpenReviewForm] = useState(false);
  const [showMore, setShowMore] = useState(5);

  const reviewsSorted = reviews.data?.toSorted?.((a, b) => Number(new Date(b.attributes.publishedAt)) - Number(new Date(a.attributes.publishedAt)));
  const loadMoreReviews = () => {
    setShowMore((prevShowMore) => prevShowMore + 5);
  };

  return (
    <div className="pb-10">
      <div
        className={clsx("flex items-center justify-center space-x-4 pt-10", "lg:justify-start", "2xl:pt-20", {
          hidden: isOpenReviewForm,
        })}>
        <button
          type="button"
          /* onClick={createReview} */
          onClick={() => setIsOpenReviewForm(true)}
          className={clsx("w-full border py-3 text-center text-lg font-bold uppercase transition-all delay-75 hover:scale-105", "lg:w-[250px]")}>
          write review
        </button>
      </div>

      {isOpenReviewForm && (
        <ReviewsForm setIsOpenReviewForm={setIsOpenReviewForm} product={data} />
      )}

      {reviewsSorted.length ? (
        reviewsSorted.slice(0, showMore).map((review, index) => (
          <div key={index} className={clsx("break-words space-y-4 border-b py-6", "lg:space-y-4 lg:py-10")}>
            <div className={clsx("flex items-center justify-between space-x-3")}>
              <span className={clsx("text-xl", "lg:text-2xl")}>{review?.attributes.name}</span>
              <p className={clsx("lg:text-lg")}>{dateFormat(new Date(review.attributes.publishedAt))}</p>
            </div>
            <GetRatings value={review.attributes.rating} className="text-xl" />
            <div className={clsx("space-y-2")}>
              <h4 className={clsx("text-xl font-bold", "lg:text-2xl")}>{review.attributes.title}</h4>
              <div className={clsx("text-lg", "lg:text-[22px]")}>
                {review?.attributes.comment ? review.attributes.comment : <span className={clsx("font-thing italic")}>No comment</span>}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={clsx("flex justify-center py-8 text-lg", "md:text-xl", "lg:py-20 lg:text-[22px]", "2xl:text-2xl")}>
          No reviews at the moment
        </div>
      )}

      {reviewsSorted.length > showMore && (
        <div className={clsx("flex items-center justify-center space-x-4 pt-10", "2xl:pt-20")}>
          <button
            type="button"
            onClick={loadMoreReviews}
            className={clsx(
              "w-full bg-white py-3 text-center text-lg font-bold uppercase text-primary transition-all delay-75 hover:scale-105",
              "lg:w-[250px]"
            )}>
            See more
          </button>
        </div>
      )}
    </div>
  );
}
