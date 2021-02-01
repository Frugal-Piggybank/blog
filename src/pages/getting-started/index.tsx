import React from "react";
import { Link } from "gatsby";

import GettingStartedLayout from "../../components/getting-started";
import NextSection from "../../components/getting-started/next-section";
import { PageRoutes } from "../../utilities/page-route-constants";

const GettingStartedPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={"Getting Started with Personal Finance"}
      pageHeader={"Your Personal Finance Roadmap"}
    >
      <p>
        Getting your personal finances in order can be a daunting task,
        especially when you have no idea where to even begin! My goal here is to
        give everyone a foundation to begin building their financial future and,
        ultimately, gaining financial independence! I do want to make note that
        I am in no way a professional financial advisor. All of the
        recommendations on this site are anecdotal and from my own experiences
        in life. Every person's situation is different and if you find yourself
        in need of professional assistance, I recommend looking for fiduciary
        financial advisors in your area that can walk you through your own
        unique situation.
      </p>
      <p>
        It's recommended you start from the beginning to really establish a
        solid understanding, but this section is really meant to help in
        whatever stage of life you find yourself needing help.
      </p>
      <NextSection
        path={`${PageRoutes.GettingStarted.EmergencyFund}`}
        linkText={`Let's Get Started!`}
      >
        I will frequently be posting updates to this area of the site to ensure
        the latest information is accurate but, as always, feel free to reach
        out to me on social media if you have any questions or comments. If you
        get through all of the information provided here and just can't wait for
        new updates, feel free to check out my <Link to="/blog">blog</Link> as
        well!
      </NextSection>
    </GettingStartedLayout>
  );
};

export default GettingStartedPage;
