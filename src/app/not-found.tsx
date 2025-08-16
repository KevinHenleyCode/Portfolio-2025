'use client'

import BasicPadding from '@/components/containers/basic-padding'
import PageHeaders from '@/components/text/page-headers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import NotFoundImg from '../../public/images/not-found.svg'

/**
 * Defaults to if page doesn't exist
 */
export default function NotFound() {
  return (
    <BasicPadding>
      <PageHeaders
        mainHeading={'Page Not Found'}
        mainSubHeading={'Could not find requested page'}
      />
      <section className='mt-12 flex flex-col items-center justify-center'>
        <span className='relative'>
          <Image
            src={NotFoundImg}
            alt={'Not Found SVG'}
            width={100}
            height={100}
            className='mx-auto w-1/2 object-contain xl:w-3/4'
          />
        </span>
        <Button asChild variant={'outline'} className='mt-12 w-fit 2xl:text-xl'>
          <span>
            <ChevronLeft />
            <Link href='/'>Return Home</Link>
          </span>
        </Button>
      </section>
    </BasicPadding>
  )
}
