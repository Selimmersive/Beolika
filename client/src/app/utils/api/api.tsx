import { API_URL } from "../urls";
import qs from "qs";
import { renderOfError } from "../utils";
import toast from "react-hot-toast";

/* COLLECTION PAGE */
export async function getAllProducts() {
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );
  try {
    const res = await fetch(`${API_URL}/api/products?${query}`, {
      next: { revalidate: 60 },
    });

    const data = await res.json();
    return data.data;
  } catch (error: any) {
    const errorCode = parseInt(error.message, 10);
    toast.error(renderOfError(errorCode));
  }
}

/* HOME PAGE */
export async function getProductsByCategory(name: string) {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337/";
  const query = qs.stringify(
    {
      populate: "*",
      pagination: {
        limit: 3,
      },
      filters: {
        categories: {
          name,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  try {
    const res = await fetch(`${API_URL}/api/products?${query}`, {
      next: { revalidate: 60 },
    });

    const data = await res.json();
    return data.data;
  } catch (error: any) {
    const errorCode = parseInt(error.message, 10);
    toast.error(renderOfError(errorCode));
  }
}

/* PRODUCT PAGE */
export async function getProductBySlug(slug: string) {
  const params = qs.stringify({
    populate: "*",
    filters: { slug },
  });

  try {
    const res = await fetch(`${API_URL}/api/products?${params}`, { next: { revalidate: 0 } });

    const data = await res.json();
    return data.data[0];
  } catch (error: any) {
    const errorCode = parseInt(error.message, 10);
    toast.error(renderOfError(errorCode));
  }
}

/* PRODUCT PAGE - DETAILS */
export async function getProductDetails(name: string) {
  const params = qs.stringify({
    populate: "*",
    filters: {
      category: {
        name,
      },
    },
  });

  try {
    const res = await fetch(`${API_URL}/api/product-details?${params}`, { next: { revalidate: 60 } });

    const data = await res.json();
    return data.data[0];
  } catch (error: any) {
    const errorCode = parseInt(error.message, 10);
    toast.error(renderOfError(errorCode));
  }
}

export async function getProductFaqs(name: string) {
  const params = qs.stringify({
    populate: "*",
    filters: {
      category: {
        name,
      },
    },
  });

  try {
    const res = await fetch(`${API_URL}/api/product-faqs?${params}`, { next: { revalidate: 60 } });

    const data = await res.json();
    return data.data[0];
  } catch (error: any) {
    const errorCode = parseInt(error.message, 10);
    toast.error(renderOfError(errorCode));
  }
}

export async function getProductLists(name: string) {
  const params = qs.stringify({
    populate: "*",
    filters: {
      category: {
        name,
      },
    },
  });

  try {
    const res = await fetch(`${API_URL}/api/product-lists?${params}`, { next: { revalidate: 60 } });

    const data = await res.json();
    return data.data[0];
  } catch (error: any) {
    const errorCode = parseInt(error.message, 10);
    toast.error(renderOfError(errorCode));
  }
}

/* LEGAL PAGE */
export async function getLegalPageBySlug(slug: string) {
  const params = qs.stringify({
    populate: "*",
    filters: { slug },
  });

  try {
    const res = await fetch(`${API_URL}/api/legals?${params}`, { next: { revalidate: 60 } });

    const data = await res.json();
    return data.data[0];
  } catch (error: any) {
    const errorCode = parseInt(error.message, 10);
    toast.error(renderOfError(errorCode));
  }
}
