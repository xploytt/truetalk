import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import setBinaryToImage from "../utils/setBinaryToImage";
import { RenderStars } from "../components/Testimonials";
import { TabCardSkeleton } from "../components/admin/TabCard";
import { useBookContext } from "../context/BookContext";
import NotFound from "./NotFound";
import NotFoundLogo from "../assets/not-found.avif";

function BookCard({ title, img, price }) {
  return (
    <div className=" bg-black blogs-card mx-auto">
      <div>
        <img src={setBinaryToImage(img?.data)} />
      </div>
      <div className="flex flex-col items-center gap-[.5rem]">
        <p className="text-center text-[#03A9F4] font-semibold text-2xl">
          {title.toUpperCase()}
        </p>
        <RenderStars rating={5} />
      </div>
    </div>
  );
}

function Books({}) {
  const { updatePage, page } = useOutletContext("Books");
  const { booksDetails, loading } = useBookContext();
  // const { loading } = useBookContext();

  useEffect(() => {
    updatePage("Books");
  }, []);

  return (
    <div>
      <main>
        <section className="bg-[#212529] pt-[50px] pb-[100px]">
          {!loading && booksDetails?.length < 1 ? (
            <NotFound
              heading={`${page?.toUpperCase()} NOT FOUND :(`}
              text={`Oops! 😖 No ${page} available presently. Check Back Later.`}
              img={NotFoundLogo}
              notFoundWrapper={true}
            />
          ) : (
            <div
              id="book-content-grid"
              className="grid content-grid mx-auto items-center gap-6 relative"
            >
              {!loading ? (
                booksDetails?.map(({ title, img, price }, i) => (
                  <BookCard key={title} title={title} img={img} price={price} />
                ))
              ) : (
                <TabCardSkeleton darkSkeleton={true} />
              )}
            </div>
          )}
        </section>
      </main>
      <Newsletter />
    </div>
  );
}

export default Books;
