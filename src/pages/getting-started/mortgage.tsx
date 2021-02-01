import React from 'react';

import GettingStartedLayout from '../../components/getting-started';
import NextSection from '../../components/getting-started/next-section';
import { PageRoutes } from '../../utilities/page-route-constants';

const MortgageLoansPage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={'Buying a House'}
      pageHeader={'Purchasing Your First Property'}
    >
      <p>
        Mortgage Loans are a pretty hot topic right now and, as I'm writing
        this, some rates are as low as 2.65% on a 30 year term, which is
        historically low. So, it's no wonder why so many people are in the
        market for a new home and why a lot of houses on the market are selling
        like hot cakes. With that being said, if you find yourself looking for a
        new place, there's a few things you should know about researching and
        securing a mortgage loan.
      </p>
      <p>
        If you've made the decision that you're ready to purchase your first
        home, or upgrade from your existing home, usually the first step
        individuals take is to find a real estate agent who they trust. Some
        people will try and take on a lot of this work (buying and selling)
        themselves, but I'd argue against this unless you really know what
        you're doing. Typically, when you're selling a property, realtors will
        usually take 6% of the selling price as commission and split it with the
        buyer's agent. I know this seems like a lot, but if you find yourself an
        agent that really works on your behalf, the stress and headaches they
        save you from are worth their weight in gold.
      </p>
      <p>
        Once you've found an agent, and even as you're actively looking at
        places to buy, it's often recommended to find a loan officer and get
        pre-approved for a loan. This makes the process of placing an offer on
        the house much smoother because the sellers of the property can trust
        that you are able to fully commit to the offer, should you decide to
        submit one. Typically, your real estate agent can recommend a good loan
        officer that they trust and hopefully you are able to lock in a rate
        you're comfortable with.
      </p>
      <p>
        Speaking of rates, there are quite a few to choose from. There are fixed
        interest loans (at both 15 and 30 year spans), variable interest loans,
        FHA loans (backed by the US Department of Housing), VA loans for
        qualified veterans and service members, and even interest only loans.
        Typically, if this is your first property or you aren't sure which one
        is right for you, it's best to talk to your loan officer. Usually, for
        most people, a 15 or 30 year fixed interest loan is what you're looking
        for.
      </p>
      <p>
        If you've found your dream home and been pre-approved from a lender for
        a certain amount of money (typically it's recommended that you should
        borrow no more than 3X your yearly income), it's time to submit an
        offer. Depending on the state of the housing market (currently it's a
        very big seller's market), you may experience quite a bit of back and
        forth where the seller will counter your offer. Once you're offer's been
        accepted, it's time to lock in a rate.
      </p>
      <p>
        There are a few more steps to take before you're ready to move into your
        new sanctuary, and usually the entire buying process can take anywhere
        from 30-45 days to complete from the time an offer is accepted. A few
        key milestones to look out for are an inspection (this is pretty
        critical for the buyer to schedule so any major defects or issues can be
        identified and remedied before closing), an appraisal (someone the loan
        officer will hire to determine if the house is worth what you agreed to
        pay for it), and also a final walkthrough a day or two before to make
        sure the house is in adequate condition before the final closing.
      </p>
      <p>
        On the day of the closing, your loan officer will most likely ask you to
        bring a cashier's check to pay any necessary "closing costs". This check
        is used to pay for things like title insurance, title fees, appraisal
        fees and other miscellaneous costs, but you'll know the exact amount
        well before the closing date.
      </p>

      <NextSection
        path={`${PageRoutes.GettingStarted.Refinancing}`}
        linkText={`Refinancing`}
      >
        Once the check's been handed over and you've received the keys, it's
        time to start making your new house a home. I'd advise against buying a
        whole bunch of brand new furniture right away, this is a personal
        finance site by the way 😉. If you've made it through all of this page,
        you can probably skip the next section, since it'll probably be a few
        years before you'll find yourself wanting to refinance.
      </NextSection>
    </GettingStartedLayout>
  );
};

export default MortgageLoansPage;
