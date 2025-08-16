import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Github, Globe } from 'lucide-react'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

interface UpdateCardProps {
  title: string
  imageUrl?: string
  linkGitHub?: string
  linkWebSite?: string
  mainBody: string
  additionalHeader: string
  additionalBody: string
}

const UpdateCard = ({
  title,
  imageUrl,
  linkGitHub,
  linkWebSite,
  mainBody,
  additionalHeader,
  additionalBody,
}: UpdateCardProps) => {
  return (
    <section className='mt-8'>
      <Card>
        <CardHeader className='relative'>
          {imageUrl ? (
            <Image
              src={`${imageUrl}`}
              alt={title}
              width={100}
              height={100}
              className='w-full object-contain'
            />
          ) : null}
        </CardHeader>
        <Separator />
        <CardContent>
          <span className='flex justify-evenly'>
            {linkGitHub ? (
              <Button asChild size={'lg'}>
                <Link href={`${linkGitHub}`}>
                  <Github />
                </Link>
              </Button>
            ) : null}
            {linkWebSite ? (
              <Button asChild size={'lg'}>
                <Link href={`${linkWebSite}`}>
                  <Globe />
                </Link>
              </Button>
            ) : null}
          </span>
        </CardContent>
        <Separator />
        <CardContent>
          <h2 className='mb-2 text-lg font-semibold md:text-xl 2xl:text-2xl'>
            Summary:
          </h2>
          <div className='2xl:[&>p]:text-xl [&>p>strong]:mb-2 [&>p>strong]:text-lg [&>p>strong]:font-semibold md:[&>p>strong]:text-xl 2xl:[&>p>strong]:text-2xl'>
            {Array.isArray(mainBody) && <PortableText value={mainBody} />}
          </div>
        </CardContent>
        <Separator />
        <CardFooter>
          <div className='flex flex-col'>
            <h2 className='mb-2 text-lg font-semibold md:text-xl 2xl:text-2xl'>
              {additionalHeader}
            </h2>
            <span className='[&>p]:ml-2 2xl:[&>p]:text-xl [&>p>strong]:-ml-2 [&>p>strong]:text-xl'>
              {Array.isArray(additionalBody) && (
                <PortableText value={additionalBody} />
              )}
            </span>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

export default UpdateCard
