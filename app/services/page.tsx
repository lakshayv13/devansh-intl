'use client';
import { Suspense } from 'react';
import ServicePage from './servicePage';

export default function ServicesWrapper() {
  return (
    <Suspense fallback={<div>Loading services...</div>}>
      <ServicePage />
    </Suspense>
  );
}
