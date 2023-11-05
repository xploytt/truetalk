import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DisclaimerWrapper from "../components/DisclaimerWrapper";

function PrivacyPolicyContent() {
  return <div>Privacy policy content</div>;
}

function PrivacyPolicy(props) {
  const { updatePage } = useOutletContext();

  useEffect(() => {
    updatePage("Privacy Policy");
  });
  return (
    <>
      <DisclaimerWrapper
        Content={PrivacyPolicyContent}
        activePage={"privacy-policy"}
      />
    </>
  );
}

export default PrivacyPolicy;
