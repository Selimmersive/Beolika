"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegStar, FaStar } from "react-icons/fa";
import { ReviewSchema } from "@/lib/schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductDto } from "@/utils/api/dto/productDto";
import { useRouter } from "next/navigation";
import { API_URL } from "@/utils/urls";
import { z } from "zod";
import clsx from "clsx";
import toast from "react-hot-toast";

type Inputs = z.infer<typeof ReviewSchema>

export default function ReviewsForm({ product, setIsOpenReviewForm }: { product: ProductDto, setIsOpenReviewForm: Dispatch <SetStateAction<boolean>> }) {
  const router = useRouter();
  const [stars, setStars] = useState([
    { id: 1, checked: false, hovered: false },
    { id: 2, checked: false, hovered: false },
    { id: 3, checked: false, hovered: false },
    { id: 4, checked: false, hovered: false },
    { id: 5, checked: false, hovered: false },
  ]);


  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(ReviewSchema),
  });


  const handleCheck = (id: number) => {
    setValue("rating", id);
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

  const formSubmit: SubmitHandler<Inputs> = data => {
    reset();
    const {comment, name, title, rating} = data;
  
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
          product: product,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return toast.error(response.statusText);
        } else {
          setIsOpenReviewForm(false);
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
    <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col items-center space-y-4 pb-10 pt-20">
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
            }}
          >
            {star.checked || star.hovered ? <FaStar className="text-white" /> : <FaRegStar />}
          </div>
        ))}
      </div>
      {errors?.rating?.message && (
        <p className="text-lg text-left">Please assign a star rating to validate your review.</p>
      )}
      <input
        type="text"
        required
        placeholder="Name*"
        className={clsx(
          "form-input w-full rounded border-gray-200 bg-transparent p-4 text-lg placeholder:text-gray-300 focus:border-white focus:ring-white",
          "lg:h-10 lg:w-[500px] lg:p-6",
          "2xl:p-8"
        )}
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name?.message && (
        <p className="text-lg text-left">{errors.name.message}</p>
      )}
      <input
        type="text"
        placeholder="Evaluation title (optional)"
        className={clsx(
          "form-input w-full rounded border-gray-200 bg-transparent p-4 text-lg placeholder:text-gray-300 focus:border-white focus:ring-white",
          "lg:h-10 lg:w-[500px] lg:p-6",
          "2xl:p-8"
        )}
        {...register('title')}
      />
      {errors.title?.message && (
        <p className="text-lg text-left">{errors.title.message}</p>
      )}
      <textarea
        required
        placeholder="What did you think?*"
        className={clsx(
          "form-textarea w-full rounded border-gray-200 bg-transparent p-4 text-lg placeholder:text-gray-300 focus:border-white focus:ring-white",
          "lg:w-[500px] lg:p-6",
          "2xl:p-8"
        )}
        {...register('comment', { required: 'Comment is required' })}
      />
      {errors.comment?.message && (
        <p className="text-lg text-left">{errors.comment.message}</p>
      )}
      <button
        type="submit"
        className={clsx("w-full border py-3 text-center text-lg font-bold uppercase transition-all delay-75 hover:scale-105", "lg:w-[500px]")}>
            Add a review
      </button>
    </form>
  );
}