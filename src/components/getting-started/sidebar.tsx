import React from 'react';
import { Link } from 'gatsby';

import SidebarLink from './sidebar-link';
import { PageRoutes } from '../../utilities/page-route-constants';

const Sidebar: React.FC = () => {
  const paths = PageRoutes.GettingStarted;
  const basePath = `${paths.BaseUri}`;

  return (
    <aside className="menu">
      <p className="menu-label">Retirement</p>
      <ul className="menu-list">
        <SidebarLink
          href={`${basePath}${paths.EmergencyFund}`}
          title="Emergency Fund"
        />
        <SidebarLink href={`${basePath}${paths.Debt}`} title="Debt" />
        <SidebarLink href={`${basePath}${paths.Four01k}`} title="401k" />
        <SidebarLink href={`${basePath}${paths.Ira}`} title="IRA" />
        <li>
          <Link to={`${basePath}${paths.Savings}`} activeClassName="is-active">
            Savings Account
          </Link>
          <ul>
            <SidebarLink href={`${basePath}${paths.HYSA}`} title="HYSA" />
            <SidebarLink
              href={`${basePath}${paths.Brokerage}`}
              title="Brokerage"
            />
          </ul>
        </li>
      </ul>

      <p className="menu-label">Family Planning</p>
      <ul className="menu-list">
        <SidebarLink
          href={`${basePath}${paths.LifeInsurance}`}
          title="Life Insurance"
        />
      </ul>

      <p className="menu-label">Mortagages</p>
      <ul className="menu-list">
        <SidebarLink href={`${basePath}${paths.Mortgage}`} title="Mortgage" />
        <SidebarLink
          href={`${basePath}${paths.Refinancing}`}
          title="Refinancing"
        />
      </ul>

      <p className="menu-label">Medical</p>
      <ul className="menu-list">
        <SidebarLink
          href={`${basePath}${paths.MedicalOverview}`}
          title="Overview"
        />
        <SidebarLink href={`${basePath}${paths.HSA}`} title="HSA" />
        <SidebarLink href={`${basePath}${paths.FSA}`} title="FSA" />
      </ul>

      <p className="menu-label">Education</p>
      <ul className="menu-list">
        <SidebarLink href={`${basePath}${paths.Five29}`} title="529 Plan" />
        <SidebarLink
          href={`${basePath}${paths.StudentLoans}`}
          title="Student Loans"
        />
      </ul>

      <p className="menu-label">General Information</p>
      <ul className="menu-list">
        <SidebarLink href="/glossary" title="Glossary" />
      </ul>
    </aside>
  );
};

export default Sidebar;
