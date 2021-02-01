import React from "react";

import GettingStartedLayout from "../../components/getting-started";
import ExternalLink from "../../components/shared/external-link";
import NextSection from "../../components/getting-started/next-section";
import { PageRoutes } from "../../utilities/page-route-constants";

const IraPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={"Individual Retirement Accounts"}
      pageHeader={"Starting and Funding an IRA"}
    >
      <p>
        An IRA, or individual retirement account, is very similar to a 401k in
        that you are typically using this money to invest in a{" "}
        <em>tax sheltered</em> account. The difference being that an IRA is
        something an <em>"individual"</em> (hence the name) contributes to on
        their own. There is also a difference in the maximum limit an individual
        can contribute throughout the year (as of 2020 that number is{" "}
        <ExternalLink
          href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits"
          openNewTab
        >
          $6,000 - or $7,000 if you're over 50 years old
        </ExternalLink>
        ).
      </p>
      <p>
        One thing I love about IRAs (again, contrary to a 401k), is that you as
        an individual have every bit of control over how you want to invest your
        money. Typically, in a 401k scenario, your employer has some sort of
        contract or agreement with a financial institution that limits the
        number of stocks, bonds, or mutual funds you as an investor (see
        employee) can choose from. With an IRA, however, you can choose whatever
        financial institution you feel most comfortable with and also choose
        whatever funds you find best fit your needs. I will typically suggest
        trying to find a low-cost index fund that appropriately matches your
        risk tolerance while also offering small expense ratios. I also
        recommend working with a financial institution that offers very low
        commission fees. However, if you are just starting out you can probably
        do most of this on your own (I'll show you how 😃 ) and don't really
        need to work with a financial institution other than creating an account
        to manage yourself.
      </p>
      <p>
        The quickest way to get an IRA set up is to first choose an institution
        that you feel comfortable with (I personally use{" "}
        <ExternalLink href="https://investor.vanguard.com/home" openNewTab>
          Vanguard
        </ExternalLink>
        ) and sign up for an account. Once you've got an account with the
        institution, you can work with their support team to get an IRA account
        set up. Once that's complete, and you've transferred money into your new
        account, it's time to choose where you want to invest that money.
        Typically, you're initial investment (and all future transfers into this
        new IRA account) will sit in a settlement fund (for Vanguard, this is
        just a "money market mutual fund that holds the money you use to buy
        securities, as well as the proceeds whenever you sell") until you're
        ready to start investing.
      </p>
      <p>
        If you're someone who prefers to invest their money, let it grow, and
        not have to think about it very often, a{" "}
        <ExternalLink
          href="https://investor.vanguard.com/mutual-funds/target-retirement/#/"
          openNewTab
        >
          Target Date Retirement Fund
        </ExternalLink>{" "}
        can be a good option. Essentially, you decide when your ideal retirement
        date will be, and the fund will automatically re-allocate your assets
        over time (adjusting for risk tolerance) as you get closer to that date.
        If you'd rather manage your investments yourself (typically you can get
        lower expense ratios going this route) you can certainly do that as
        well. I plan to write up a blog post at a later date on how to choose
        the best personalized funds yourself, and will link to that when it's
        finished.
      </p>
      <NextSection
        path={`${PageRoutes.GettingStarted.Savings}`}
        linkText={`Savings`}
      >
        In the meantime, now that you've got your IRA set up, you can start
        contributing (up to the limit) on a recurring basis. Once you've maxed
        out your IRA for the year, (assuming you've also maxed out your 401k)
        another option with additional funds is to open a savings account. We'll
        talk about that next.
      </NextSection>
    </GettingStartedLayout>
  );
};

export default IraPage;
