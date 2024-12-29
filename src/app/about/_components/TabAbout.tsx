'use client';

import { useState } from 'react';

import Tab from '@/components/common/Tab';

import { tabList } from '../constants';
import NetworkingTabItem from './NetworkingTabItem';
import StudyTabItem from './StudyTabItem';

const TabAbout = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <main className="flex w-full flex-col gap-y-10">
      <Tab tabList={tabList} selectedTab={selectedTab} onTabChange={handleTabChange} />
      {selectedTab === 0 && <StudyTabItem />}
      {selectedTab === 1 && <NetworkingTabItem />}
    </main>
  );
};

export default TabAbout;
