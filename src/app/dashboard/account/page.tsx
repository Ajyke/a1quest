import StyledTabs from '@/common/StyledTabs';
import AccountSettings from '@/components/account/settings';
import AccountSubscription from '@/components/account/subscription';
import AccountWallet from '@/components/account/wallet';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import React from 'react';

const tabs = ['Settings', 'Wallet', 'Subscription'];
const panels = [
  <AccountSettings key='Settings' />,
  <AccountWallet key='Wallet' />,
  <AccountSubscription key='Subscription' />,
];

const AccountPage = () => {
  return (
    <DashboardLayout pageTitle='Account'>
      <StyledTabs tabs={tabs} panels={panels} />
    </DashboardLayout>
  );
};

export default AccountPage;
