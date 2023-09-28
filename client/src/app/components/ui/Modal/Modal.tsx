import clsx from "clsx";
import Links from "../Links";
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  handleClose: () => void;
}

export default function Modal(props: ModalProps) {
  return (
    <div className="absolute z-50 right-0 top-0 h-full w-full bg-[var(--color-primary)]">
      <div className={clsx("flex flex-col space-y-10 h-full justify-center items-center text-lg uppercase", "lg:pt-2 lg:text-xl")}>
        <Links
          classActive="border-b-[3px] font-semibold text-xl sm:text-2xl"
          links={[
            { href: "/", className: "link text-xl sm:text-2xl", title: "Home" },
            { href: "/themes", className: "link  text-xl sm:text-2xl", title: "Themes" },
            { href: "/faq", className: "link  text-xl sm:text-2xl", title: "FAQ" },
            { href: "/contact", className: "link  text-xl sm:text-2xl", title: "Contact" },
          ]}
        />
      </div>
      <IoClose onClick={props.handleClose} className="text-3xl absolute text-white right-5 top-8" />
    </div>
  );
}
  