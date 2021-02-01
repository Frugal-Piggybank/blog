import React from 'react';

import GettingStartedLayout from '../../components/getting-started';
import TextLink from '../../components/getting-started/text-link';
import { PageRoutes } from '../../utilities/page-route-constants';
import NextSection from '../../components/getting-started/next-section';
import ExternalLink from '../../components/shared/external-link';

const BrokeragePage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={'Brokerage Accounts'}
      pageHeader={'What To Do With All Of That Extra Money?'}
    >
      <p>
        <TextLink
          path={`${PageRoutes.GettingStarted.HYSA}`}
          text={'High Yield Savings Accounts'}
        />{' '}
        can be a great place to park your money when your time horizon is only a
        few years out, but what should you do with the money that you really
        don't have a plan for? Like all things personal finance, there are a
        number of options. From my own personal experience, I've found that a
        brokerage fund can be a solid choice.
      </p>
      <p>
        Brokerage accounts can be set up at many different institutions.
        However, unless you have some reason not to, my advice would be to stick
        with the same one that you chose for your{' '}
        <TextLink path={`${PageRoutes.GettingStarted.Ira}`} text={'IRA'} />.
        This will allow you to manage both accounts in one location.
      </p>
      <p>
        Similar to your IRA, you will have the ability to choose the equities
        you want to hold as a part of your brokerage account. One thing to point
        out, this is <strong>NOT</strong> a tax-sheltered account like your IRA
        is. What this means for you is that you need to be{' '}
        <em>very selective</em> about the types of investments you are holding
        if you really want to make a brokerage account worthwhile.
      </p>
      <p>
        If you are looking at stocks, plan to hold them for at least 1 year. Any
        shorther than that and you are succeptible to short-term capital gains
        tax, which is equal to your ordinary income tax. Longer than a year and
        your tax responsility falls rather signifanctly. Other options when
        deciding on your brokerage account strategy are:
        <ul>
          <li>
            Stock, index or exchange-traded funds (ETFs) with low turnover
          </li>
          <li>Qualified dividend paying stocks and mutual funds</li>
          <li>Series 1 and municipal bond funds</li>
        </ul>
      </p>

      <NextSection
        linkText={'Life Insurance'}
        path={PageRoutes.GettingStarted.LifeInsurance}
      >
        My strategy with my own personal brokerage fund has been to stick it in
        a low-cost,{' '}
        <ExternalLink
          openNewTab
          href={'https://investor.vanguard.com/mutual-funds/profile/VTSAX'}
        >
          Total Stock Market Index Fund
        </ExternalLink>
        , and continue to let it grow overtime (this means absolutely leaving it
        alone for longer than 1 year). This next section really focuses on
        finances if you have, or are planning to start, a family. If this does
        not pertain to you, feel free to skip ahead to the{' '}
        <TextLink
          path={`${PageRoutes.GettingStarted.Mortgage}`}
          text={'following section'}
        />
        .
      </NextSection>
    </GettingStartedLayout>
  );
};

export default BrokeragePage;
