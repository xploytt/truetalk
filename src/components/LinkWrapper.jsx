import React from "react";
import { wrapperLinks } from "../data/links";
import kabbasToTitleCase from "../js/toTitleCase";
import "../styles/_linkWrapper.scss";
import { FaArrowRight } from "react-icons/fa";

function LinkWrapper({ activePage }) {
  return (
    <>
      <div id="link-wrapper-div">
        <ul className="">
          {wrapperLinks.map((link) => {
            return (
              <li
                key={link}
                className={`${
                  link == activePage ? "current" : ""
                } w-[95%] px-[1.2rem] py-[1rem] font-[500] text-[1.1rem]`}
              >
                <a href={`/${link}`}>{kabbasToTitleCase(link)}</a>
                <FaArrowRight />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default LinkWrapper;
