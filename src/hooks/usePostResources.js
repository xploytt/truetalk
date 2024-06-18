import { useEffect, useState } from "react";
import postData from "../utils/postData";
// import { useTabContextData } from "../context/TabContext";

export default function usePostResources({
  setPostingData,
  tabToPostTo,
  resourceToPost,
  newUpload,
  setImplementedPostHook,
}) {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const postResource = async () => {
      if (!resourceToPost || !tabToPostTo) return;

      try {
        setPostingData(true);
        const immediateResponse = await postData(
          tabToPostTo,
          resourceToPost,
          newUpload
        );

        setResponse(immediateResponse);
      } catch (error) {
        console.log(error);
      } finally {
        setPostingData(false);
        setImplementedPostHook(true);
      }
    };

    postResource();
  }, [resourceToPost, tabToPostTo]);

  return response;
}
