import Description from "@/components/Product/Description";
import Faq from "@/components/ui/FAQ";
import Reviews from "@/components/Product/Reviews";
import { FaqDto } from "./api/dto/faqDto";
import { ProductDetailsDto } from "./api/dto/productDetailsDto";
import { ProductDto } from "./api/dto/productDto";
import { ReviewDto } from "./api/dto/reviewDto";
import toast from "react-hot-toast";

export const renderOfButtonSelected = (selected: number, product: ProductDto, productDetails: ProductDetailsDto, productFaqs: FaqDto) => {
  switch (selected) {
  case 0:
    return <Description data={productDetails} />;
  case 1:
    return <Faq data={productFaqs} />;
  case 2:
    return <Reviews data={product} />;
  default:
    return <Description data={productDetails} />;
  }
};

const renderOfError = (errorCode: number) => {
  switch (errorCode) {
  case 0:
    return "Network error: No Internet connection.";
  case 400:
    return "Oops, there's a problem. Your request is incorrect or badly formulated.";
  case 401:
    return "Sorry, you are not authorized to access this resource.";
  case 402:
    return "Payment is required to access this resource. Please make a payment to continue.";
  case 403:
    return "Access denied. You are not authorized to access this page.";
  case 408:
    return "Sorry, your request took too long to process. Please try again.";
  case 409:
    return "There is a conflict in the request. Please contact our support team to resolve the problem.";
  case 410:
    return "This resource is no longer available. Please explore our other products or services.";
  case 429:
    return "You've made too many requests in a short space of time. Please wait a moment before continuing.";
  case 451:
    return "This product is currently out of stock. Please come back soon or see our other products.";
  case 500:
    return "We have a technical problem. Our teams are working to solve the problem. Please try again later.";
  case 503:
    return "Payment could not be processed. Please check your payment details and try again.";
  case 504:
    return "Our server is taking longer than expected. Please try again or wait a moment.";
  default:
    return "An error has occurred, please contact technical support";
  }
};

export const dateFormat = (date: Date) => {
  const YYYY = date.getFullYear();
  const DD = date.getDate();
  const Month = date.getMonth() + 4;
  return `${DD}/${Month}/${YYYY}`;
};

export const calculateAverageRating = (reviews: ReviewDto[]) => {
  if (reviews.length === 0) {
    return 0;
  }

  const totalRating = reviews.reduce((acc, review) => acc + review.attributes.rating, 0);
  return totalRating / reviews.length;
};

export const errorResponse = (err: any) => {
  if(err.response && err.response.status) {
    return toast.error(renderOfError(err.response.status));
  } else {
    return toast.error(err.message);
  }
};