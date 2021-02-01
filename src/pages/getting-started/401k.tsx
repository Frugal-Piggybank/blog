import React from "react";

import GettingStartedLayout from "../../components/getting-started";
import NextSection from "../../components/getting-started/next-section";
import { PageRoutes } from "../../utilities/page-route-constants";
import ExternalLink from "../../components/shared/external-link";

const Four01kPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageHeader={"Starting and Funding a 401k"}
      pageTitle={"401k"}
    >
      <p>
        A 401k is an awesome investment vehicle. There are so many tax benefits
        to starting a 401k that I would be remiss not to make it my first choice
        as an <em>investment</em> option.
      </p>
      <p>
        With that being said, not all companies offer a 401k and even if they
        do, they don't always match their employee's contributions. Both of
        these decisions will have an impact on choosing a 401k as your first
        option to invest. So, it's critical that you first talk to someone at
        your company and find out whether they offer a 401k option, and if they
        are willing to match a percentage of your own individual contributions.
        If your company does not offer a 401k, or you own your own business,
        there are other options out there and I will dive into those options at
        a later time.
      </p>
      <p>
        The reason I 😍 starting with a 401k is because a lot of times employers
        will match a certain percentage of an individual's contribution. I've
        seen this as high as 6% at some places, and I'm sure there are others
        that offer more than that. If we do a quick bit of{" "}
        <em>back of the napkin</em> math, you'll see why this can lead to huge
        returns, not to mention <strong>it's free money!</strong>
      </p>
      <p>
        Let's assume you make 500 every paycheck and you're paid biweekly. If
        your company guarantees a $1 to $1 match up to 6%, you would only need
        to contribute $30 of your paycheck to receive the full match from your
        employer. Now, let's{" "}
        <ExternalLink
          href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
          openNewTab
        >
          calculate
        </ExternalLink>{" "}
        how much that $30 your employer gives you every two makes you over your
        lifetime.
      </p>
      <p>
        Assuming you work for 30 years with this company, with a $0 initial
        investment, your company's monthly contribution to your 401k would be
        $60. The stock market has typically{" "}
        <ExternalLink
          href="https://www.nerdwallet.com/blog/investing/average-stock-market-return/"
          openNewTab
        >
          averaged
        </ExternalLink>{" "}
        around 10% returns, but we're going to factor in inflation, so we'll
        stick with 7% in this example. After 30 years, with a daily compounding
        frequency, your company will have essentially given you over $73,000!
      </p>
      <p>
        That's a lot of money, and $30 out of your paycheck is certainly
        feasible in that scenario, assuming you are able to manage your expenses
        (which is the goal of this website). The outcome from the previous
        example only gets better as you excel in your career and your salary
        increases over time.
      </p>
      <NextSection path={`${PageRoutes.GettingStarted.Ira}`} linkText={`IRA`}>
        If you've reached your company's match and find that you have more money
        that you'd like to save, my next suggestion would be to open an IRA
        (Individual Retirement Account). The reason I suggest going this route
        first, instead of increasing your 401k contribution, is because an IRA
        gives you more options into the types of investments you can choose.
        I'll explain more in the next section.
      </NextSection>
    </GettingStartedLayout>
  );
};

export default Four01kPage;
