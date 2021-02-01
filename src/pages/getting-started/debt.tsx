import React from "react";

import GettingStartedLayout from "../../components/getting-started";
import { PageRoutes } from "../../utilities/page-route-constants";
import TextLink from "../../components/getting-started/text-link";
import NextSection from "../../components/getting-started/next-section";

const DebtPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={"Managing Debt"}
      pageHeader={"Managing Debt"}
    >
      <p>
        Debt is one of the largest inhibitors to becoming financially
        independent. Which is why it's one of the first things I suggest
        tackling, even before moving onto savings, outside of creating an{" "}
        <TextLink
          path={`${PageRoutes.GettingStarted.EmergencyFund}`}
          text={"Emergency Fund"}
        />
        .
      </p>
      <p>
        Debt can really get away from you if you're not careful, which is why I
        recommend staying away from major loans or credit cards until you've got
        a better handle on your financial situation. If you find yourself stuck
        in this situation already, my advice would be to pay off the balance as
        soon as possible, prioritizing the loans with the highest interest rate
        first.
      </p>
      <NextSection
        path={`${PageRoutes.GettingStarted.Four01k}`}
        linkText={`401k`}
      >
        Once you begin to pay down the balance on your loans (or if you never
        had any to begin with) it's time to move on to setting up your 401k.{" "}
      </NextSection>
    </GettingStartedLayout>
  );
};

export default DebtPage;
