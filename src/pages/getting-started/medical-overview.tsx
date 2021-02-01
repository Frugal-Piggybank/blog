import React from "react";

import GettingStartedLayout from "../../components/getting-started";

const MedicalOverviewPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={"Medical Overview"}
      pageHeader={"Medical Overview"}
    >
      Welcome to the Medical Overview page
      <p>
        <strong>Deductibles</strong>
      </p>
      <p>
        <strong>Premiums</strong>
      </p>
    </GettingStartedLayout>
  );
};

export default MedicalOverviewPage;
