import { Metadata } from "next";
import css from "./Home.module.css";

export const metadata: Metadata = {
  title: "Page is not found",
  description: "Page with this name does not exist",
  openGraph: {
    title: "NoteHub",
    description: "Manage, create and edit notes",
    url: "https://notehub.com",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

const NotFound = () => (
  <>
    <h1 className={css.title}>404 - Page not found</h1>
    <p className={css.description}>
      Sorry, the page you are looking for does not exist.
    </p>
  </>
);

export default NotFound;
