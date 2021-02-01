import React from "react";

import GettingStartedLayout from "../../components/getting-started";
import { PageRoutes } from "../../utilities/page-route-constants";
import NextSection from "../../components/getting-started/next-section";

const EmergencyFundPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={"Emergency Funds"}
      pageHeader={"Creating an Emergency Fund"}
    >
      <p>
        The first thing I always like to recommend is saving up an emergency
        fund. An emergency fund can best be described as readily available money
        that can be used in emergency situations. The reason I typically suggest
        this as the first step is because life tends to throw us curveballs, and
        it's best to be ready when those situations arise.
      </p>
      <p>
        There are a lot of differing opinions on just how much a person should
        keep in their emergency fund (typically anywhere from 3-6 months will
        suffice), but this is all based on each individual's risk tolerance. One
        way to determine this is by thinking about how long you can comfortably
        go without a paycheck before finding a new source of income.
      </p>
      <p>
        After you've determined your comfort level, it's time to start stashing
        some of that money away into a savings account. There are a number of{" "}
        <em>vehicles</em> that you could put this money in, including CDs, a
        HYSA, or even a Money Market account. My initial advice would be to go
        with a HYSA, as it performs just like a typical savings account you may
        be used to, but the interest that you gain from it each month is usually
        a lot better.
      </p>
      <NextSection path={`${PageRoutes.GettingStarted.Debt}`} linkText={`Debt`}>
        Once you've got enough saved up, it's time to start paying down some of
        that debt.
      </NextSection>
    </GettingStartedLayout>
  );
};

export default EmergencyFundPage;
