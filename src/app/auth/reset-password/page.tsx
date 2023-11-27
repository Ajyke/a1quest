import AuthLayout from '@/components/auth/AuthLayout';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
import React from 'react';
import FormImage from '@/assets/images/auth/reset-password.webp';

const ResetPasswordPage = () => {
  return (
    <AuthLayout image={FormImage}>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
