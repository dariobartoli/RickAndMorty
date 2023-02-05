import React from "react";
import "../assets/styles/gallery.css";
import Footer from "./Footer";
import { Header } from "./Header";

export const Gallery = () => {
  return (
    <>
      <Header />
      <div className="mainGallery">
        <div className="mainGalleryC"></div>
      </div>
      <Footer />
    </>
  );
};
