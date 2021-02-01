import React from 'react';

import GettingStartedLayout from '../../components/getting-started';
import NextSection from '../../components/getting-started/next-section';
import { PageRoutes } from '../../utilities/page-route-constants';

const Five29Page: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={'529 Plans'}
      pageHeader={'Saving for Education with a 529 Plan'}
    >
      <p>
        Setting up a 529 was one of the first initiatives I decided to explore
        when my son was born. A 529 plan is a special kind of tax-advantaged
        account that is specifically designed with education in mind.
      </p>
      <p>
        Typically, 529 plans are a great tool if you want to get a head start on
        saving for college, but college tuition is not the only eligible expense
        that you can take advantage of. Money from a 529 plan can be used for
        K-12 and trade school education, as well as other education-related
        expenses such as books, fees, and dormitories.
      </p>
      <p>
        Each state has their own state-sponsored 529 plan that includes a number
        of different investment options, and some states even provide local
        state tax incentives as well if you opt in to their program. However,
        you are not limited to just your state's plan. The state I reside in
        does not offer any sort of state tax incentives and I was not a huge fan
        of the plans that were offered so I decided to open an account with
        Vanguard's 529 plan (sponsored in Nevada) so that all of my other
        investment accounts could be managed under one umbrella account.
      </p>
      <p>
        Once you've decided on the state and institution that you'd like to open
        an account with, you'll need to decide what your 529 portfolio will look
        like. Each plan offers different alternatives, and some (like Vanguard)
        even offer Target Date funds (based on when the beneficiary will start
        school) so you can take a more passive approach. One thing to note about
        529 plans is that you'll need a social security number for the
        beneficiary in order to open an account, so if you're like me and want
        to get started right out of the gate, you'll at least need to wait until
        they're born and receive a social security card.
      </p>
      <p>
        As I mentioned, withdrawals from a 529 plan can be used tax-free as long
        as they are used toward a qualifying educational expense. If the
        beneficiary decides not to pursue an education, you have one of two
        options. First, you can withdraw the money like any other savings
        account, but it will be taxed as ordinary income along with a 10%
        penalty (only on the earnings, not the principal). Your other option is
        to change beneficiaries. Most 529 plans allow you to change the
        beneficiary once per year, as long as the new beneficiary is a family
        member (sibling, cousin, etc).
      </p>

      <NextSection
        linkText={'Student Loans'}
        path={PageRoutes.GettingStarted.StudentLoans}
      >
        Knowing these restrictions can help inform you to better decide if a 529
        plan is right for you. If you're not sure whether the money will be used
        for educational expenses in the future, a different investment vehicle
        may make more sense. To continue with the theme of education, let's take
        a look at applying for, and paying down student loans.
      </NextSection>
    </GettingStartedLayout>
  );
};

export default Five29Page;
