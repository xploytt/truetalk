import React, { useEffect, useState } from "react";
import Newsletter from "../components/Newsletter";
import { useOutletContext } from "react-router-dom";
import "../styles/_gallery.scss";
import setBinaryToImage from "../utils/setBinaryToImage";
import useFetchedData from "../hooks/useFetchedData";
import { TabCardSkeleton } from "../components/admin/TabCard";
import NotFound from "./NotFound";
import NotFoundLogo from "../assets/not-found.avif";

function Gallery({}) {
  const { updatePage, page } = useOutletContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updatePage("Gallery");
  });

  const { data: imgs } = useFetchedData({
    tabToFetchFrom: "gallery",
    setLoading,
  });

  return (
    <>
      <main>
        <section id="gallery-section" className="bg-[#212529] py-[80px]">
          {!loading && imgs?.length < 1 ? (
            <NotFound
              heading={`${page?.toUpperCase()} NOT FOUND :(`}
              text={`Oops! 😖 No image available presently. Check Back Later.`}
              img={NotFoundLogo}
              notFoundWrapper={true}
            />
          ) : (
            <div id="" className="content-grid grid mx-auto items-center gap-6">
              {!loading ? (
                imgs?.map((img, i) => (
                  <div key={i} className="mx-auto image-wrapper">
                    <img
                      src={setBinaryToImage(img?.img?.data)}
                      className="w-[100%]"
                      alt="One of our images from true talk gallery"
                    />
                  </div>
                ))
              ) : (
                <TabCardSkeleton darkSkeleton={true} />
              )}
            </div>
          )}
        </section>
      </main>
      <Newsletter />
    </>
  );
}

export default Gallery;
