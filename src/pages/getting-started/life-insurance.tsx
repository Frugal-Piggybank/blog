import React from "react";

import GettingStartedLayout from "../../components/getting-started";
import NextSection from "../../components/getting-started/next-section";
import { PageRoutes } from "../../utilities/page-route-constants";

const LifeInsurancePage: React.FC = () => {
  return (
    <GettingStartedLayout
      pageTitle={"Life Insurance"}
      pageHeader={"Protecting Loved Ones With Life Insurance"}
    >
      <p>
        Life insurance is an interesting topic of conversation for so many.
        Considering the fact that it's sole purpose is to cover you and your
        family in the event of an early passing, it's not always easy to discuss
        but is important to understand.
      </p>
      <p>
        It becomes critical to at least investigate your options regarding life
        insurance after marriage, but even more so if you decide to have
        children. The life insurance policy that you choose can help cover
        necessary daily expenses and even costly funeral expenses in the event
        that you unexpectedly pass away. However, this monetary coverage is not
        the only consideration that needs to be made.
      </p>
      <p>
        The coverage and rates that you receive will ultimately depend on two
        key factors: the age at which you apply and any pre-existing medical
        issues you currently have. The lower either of these are, the better
        rate you're likely to receive. When it comes to selecting life
        insurance, you essentially have two options to choose from,{" "}
        <em>Whole</em> and <em>Term</em> life insurance.
      </p>
      <h2 className="title is-5">Whole Life Insurance</h2>
      <p>
        Whole life insurance (sometimes referred to as permanent life insurance)
        is a policy that never expires (hence the name). Typically, the premiums
        are higher with whole life insurance but can be a good option for
        individuals with medical conditions that might otherwise make it
        difficult to continue renewing ongoing policies. Whole life insurance
        may also be a good option for individuals with family members that
        require special needs and ongoing care, even after the individual policy
        holder has passed on. Choosing whole life is not something you
        necessarily need to decide on right away, however, as many term policies
        will offer an option to convert to permanent policies later down the
        line.
      </p>
      <h2 className="title is-5">Term Life Insurance</h2>
      <p>
        Term life insurance is just the opposite, where you are guaranteed
        coverage for a certain <em>term</em> of your life. Typically, the rates
        for term life insurance are much lower the younger you are when coverage
        begins. If you have, or are planning to start a family, term life
        insurance may be a critical subject to get familiar with.
      </p>
      <p>
        Choosing the term is purely subjective and will obviously depend on your
        current financial situation and what you can afford to pay. A few
        questions to consider when choosing an option, however, are:
        <ul>
          <li>
            Can my spouse/children continue living the same lifestyle if I'm no
            longer in the picture?
          </li>
          <li>
            What upcoming expenses may also have an impact on my family's
            financial stress?
          </li>
          <li>How long will my family be dependent on my income?</li>
        </ul>
        There are a few different options that fall under the term policy
        umbrella, including level term policies, yearly renewable term policies,
        and decreasing term policies. There is also the option to apply for
        group term life insurance, and I'll cover all of these options in more
        detail in a future post.
      </p>

      <NextSection
        path={`${PageRoutes.GettingStarted.Five29}`}
        linkText={`529 Plans`}
      >
        As I said before, any choice you make regarding life insurance is going
        to be very personal to your own financial situation. For me, with a
        child on the way, it probably makes the most sense to find a reasonably
        low cost term option for roughly 20 years (when they're hopefully close
        to graduating college and ready to move out on their own). Speaking of
        college, how does anyone afford that nowadays? We'll take a look at that
        next with a pretty cool, tax efficient strategy.
      </NextSection>
    </GettingStartedLayout>
  );
};

export default LifeInsurancePage;
