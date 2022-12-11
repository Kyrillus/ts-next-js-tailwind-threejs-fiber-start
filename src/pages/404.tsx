import Link from "next/link";
import * as React from 'react';
import { RiAlarmWarningLine, RiArrowRightSLine } from 'react-icons/ri';

import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningLine
              size={60}
              className='drop-shadow-glow animate-bounce text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <Link className='mt-4 md:text-lg border-b flex gap-2 justify-center items-center' href='/'>
              Back to Home
              <RiArrowRightSLine/>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
