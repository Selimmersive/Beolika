import { API_URL } from "../urls";
import qs from "qs";

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

  const res = await fetch(`${API_URL}/api/products?${query}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.data;
}

/* HOME PAGE */
export async function getProductsByCategory(name: string) {
  const query = qs.stringify(
    {
      populate: "*",
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
  const res = await fetch(`${API_URL}/api/products?${query}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.data;
}

/* PRODUCT PAGE */
export async function getProductBySlug(slug: string) {
  const params = qs.stringify({
    populate: "*",
    filters: { slug },
  });

  const res = await fetch(`${API_URL}/api/products?${params}`, { next: { revalidate: 0 } });

  const data = await res.json();
  return data.data[0];
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

  const res = await fetch(`${API_URL}/api/product-details?${params}`, { next: { revalidate: 60 } });

  const data = await res.json();
  return data.data[0];
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

  const res = await fetch(`${API_URL}/api/product-faqs?${params}`, { next: { revalidate: 60 } });

  const data = await res.json();
  return data.data[0];
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

  const res = await fetch(`${API_URL}/api/product-lists?${params}`, { next: { revalidate: 60 } });

  const data = await res.json();
  return data.data[0];
}

/* LEGAL PAGE */
export async function getLegalPageBySlug(slug: string) {
  const params = qs.stringify({
    populate: "*",
    filters: { slug },
  });

  const res = await fetch(`${API_URL}/api/legals?${params}`, { next: { revalidate: 60 } });

  const data = await res.json();
  return data.data[0];
}
