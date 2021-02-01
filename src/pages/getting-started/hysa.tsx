import React from "react";

import GettingStartedLayout from "../../components/getting-started";
import ExternalLink from "../../components/shared/external-link";
import { PageRoutes } from "../../utilities/page-route-constants";
import NextSection from "../../components/getting-started/next-section";

const HysaPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={"High Yield Savings Account"}
      pageHeader={"Your Safety Net When The Unexpected Occurs"}
    >
      <p>
        I discovered the benefits of a high yield savings account a few months
        into my personal finance journey. I was struggling to find the benefit
        of keeping anything more than the bare minimum for emergency situations,
        because at the time I was keeping that money in a regular savings
        account (where interest typically averages out to about 0.1%). It made
        no sense to keep more than what I absolutely needed for emergency
        situations because I was losing out on roughly 7% by investing that
        money in the market.
      </p>
      <p>
        After learning a bit more about just how important having an emergency
        fund is, I decided I needed to increase mine a bit more and so I began
        looking for alternatives to a regular savings account. At this point in
        time, the economy was in great shape and I started finding HYSAs that
        were returning over 2% interest!
      </p>
      <p>
        Over time, I've come to learn that interest rates on high-yield savings
        accounts can be anywhere from{" "}
        <ExternalLink
          openNewTab
          href={"https://www.fdic.gov/regulations/resources/rates/"}
        >
          20 to 25 times higher
        </ExternalLink>{" "}
        than that of a traditional savings account. It's important to look for a
        few pieces of information when deciding on an institution to go with. A
        few of the more important items are as follows:
        <ul>
          <li>
            <strong>Interest Rate</strong>
            <p>
              Not all HYSAs are created equal and some institutions tend to
              offer better interest rates than others.
            </p>
          </li>
          <li>
            <strong>Insurance</strong>
            <p>
              It's very important to make sure the account you choose to open is
              FDIC insured (typically up to $250,000) so you can rest easy
              knowing your money is in good hands.
            </p>
          </li>
          <li>
            <strong>User Interface</strong>
            <p>
              A lot of HYSAs are "online only" banks or have only a handful of
              physical locations. For this reason, it's important to make sure
              you are comfortable using their online tools (either their website
              or mobile app if they offer one).
            </p>
          </li>
          <li>
            <strong>Initial Deposit</strong>
            <p>
              Some banks require a minimum deposit before opening a new high
              yield savings account. Make sure you are able and comfortable to
              deposit this money before opening a new account.
            </p>
          </li>
          <li>
            <strong>Transaction Time</strong>
          </li>
          <p>
            I still use my local brick and mortar bank for a checking account,
            which is where any bills or credit card payments are deposited from.
            For this reason, if an emergency arises, I need to make sure I can
            transfer money from my HYSA into my checking account swiftly.{" "}
          </p>
        </ul>
      </p>
      <p>
        For full transparency, after reviewing the above criteria and looking at
        multiple options, I decided to go with{" "}
        <ExternalLink
          openNewTab
          href={"https://www.ally.com/bank/online-savings-account/"}
        >
          Ally
        </ExternalLink>{" "}
        for my high yield savings account. Their customer service has been top
        notch, their mobile application is very easy to use, and after a few
        months of establishing an account, I'm able to transfer money from my
        Ally account into my local checking account overnight.
      </p>
      <NextSection
        linkText={"Brokerage"}
        path={PageRoutes.GettingStarted.Brokerage}
      >
        After deciding on an institution to stash away your emergency fund, it's
        time to throw any additional after-tax money into a{" "}
        <em>tax efficient</em> brokerage fund. We'll learn about that next.
      </NextSection>
    </GettingStartedLayout>
  );
};

export default HysaPage;
