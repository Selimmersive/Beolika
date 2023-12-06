import Footer from "@/components/ui/Footer";
import Loading from "./loading";
import { Suspense } from "react";
import Contact from "@/components/ui/Contact/Contact";

export const metadata = {
  title: "Contact",
  description: "At Beolika, we are committed to providing exceptional customer service. We are here to guide you in your choice, answer your questions and offer personalized assistance at every stage of your shopping experience. Your satisfaction and happiness are our top priority.",
  alternates: {
    canonical: `/contact`
  }
};

export default function ContactPage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
