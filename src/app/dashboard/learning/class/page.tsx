import BackComponent from '@/common/BackComponent';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import ClassTopics from '@/components/learning/ClassTopics';
import React from 'react';

const LearningClass = () => {
  return (
    <DashboardLayout>
      <BackComponent />
      <ClassTopics />
    </DashboardLayout>
  );
};

export default LearningClass;