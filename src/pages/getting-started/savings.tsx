import React from "react";

import GettingStartedLayout from "../../components/getting-started";
import TextLink from "../../components/getting-started/text-link";
import NextSection from "../../components/getting-started/next-section";
import { PageRoutes } from "../../utilities/page-route-constants";

const SavingsPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={"Starting a Savings Account"}
      pageHeader={"Not Your Father's Savings Account"}
    >
      <p>
        When you think of a savings account, you're probably most familiar with
        the typical account that, as of 2020, only averages about a 0.1%
        interest rate. One of the major benefits of having a savings account is
        the liquidity (how quickly you can access the money) and this really
        comes in handy for emergency situations. But, as we discussed in the{" "}
        <TextLink
          path={PageRoutes.GettingStarted.EmergencyFund}
          text={"emergency fund"}
        />{" "}
        section, there are better options to pursue when creating a savings
        account. The most popular alternative being a{" "}
        <TextLink
          path={PageRoutes.GettingStarted.HYSA}
          text={"High Yield Savings Account"}
        />
        , which offers the same benefits of a regular savings account (high
        liquidity and most are FDIC insured up to $250,000).
      </p>
      <p>
        Another option, assuming liquidity is not your highest priority, would
        be to start a{" "}
        <TextLink
          path={PageRoutes.GettingStarted.Brokerage}
          text={"Brokerage Account"}
        />
        . A brokerage account is an account you can set up with a licensed
        brokerage firm (think Vanguard again) and invest that money in equities,
        the same way you would a 401k or IRA. However, because this money is
        always going to be subject to tax (including any capital gains you make
        from your investments) you'll want to be very selective about which
        equities you choose in this account.
      </p>
      <NextSection linkText={"HYSA"} path={PageRoutes.GettingStarted.HYSA}>
        If you've decided on the type of account you'd like to utilize, we can
        begin digging into some of the details for each one. We'll start with a
        High Yield Savings Account and then move onto a Brokerage Account.
      </NextSection>
    </GettingStartedLayout>
  );
};

export default SavingsPage;
