import Image from "next/image";
import { Navigation } from "../components/nav";


export default async function ProjectsPage() {

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image1/4.png" alt="Image 1" width={500} height={500} />
          <Image src="/images/image1/3.png" alt="Image 2" width={500} height={500} />
          <Image src="/images/image1/1.png" alt="Image 3" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image1/2.png" alt="Image 4" className="h-full object-cover col-span-3" width={1500} height={500} />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image2/1.png" alt="Image 5" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image2/4.png" alt="Image 6" width={500} height={500} />
          <Image src="/images/image2/2.png" alt="Image 7" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image2/3.png" alt="Image 8" className="col-span-3" width={1500} height={500} />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image3/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image3/4.png" alt="Image 10" width={500} height={500} />
          <Image src="/images/image3/3.png" alt="Image 11" width={500} height={500} />
          <Image src="/images/image3/2.png" alt="Image 12" className="h-full object-cover col-span-3" width={1500} height={500} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/image4/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image4/2.png" alt="Image 12" className="h-full object-cover " width={1500} height={500} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/image5/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image5/2.png" alt="Image 12" className="h-full object-cover " width={1500} height={500} />
        </div>


        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image6/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image6/2.png" alt="Image 12" className="h-full object-cover " width={1500} height={500} />
          <Image src="/images/image6/3.png" alt="Image 12" className="h-full object-cover h-full" width={1500} height={500} />
        </div>

        {/* 777777 */}
        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image7/4.png" alt="Image 10" width={500} height={500} />
          <Image src="/images/image7/3.png" className="h-full" alt="Image 11" width={500} height={500} />
          <Image src="/images/image7/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image7/2.png" alt="Image 12" className="h-full object-cover col-span-3" width={1500} height={500} />
        </div>

        {/* 888888 */}
        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image8/2.png" alt="Image 12" className="h-full object-cover" width={1500} height={500} />
          <Image src="/images/image8/4.png" alt="Image 10" width={500} height={500} />
          <Image src="/images/image8/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image8/3.png" alt="Image 11" width={1500} height={500} className="col-span-3" />
        </div>

        {/* 99999 */}
        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image9/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image9/2.png" alt="Image 12" className="h-full object-cover" width={1500} height={500} />
          <Image src="/images/image9/4.png" alt="Image 10" width={500} height={500} className="h-full" />
          <Image src="/images/image9/3.png" alt="Image 11" width={1500} height={500} className="col-span-3" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image10/2.png" alt="Image 12" className="h-full object-cover" width={1500} height={500} />
          <Image src="/images/image10/3.png" alt="Image 11" width={500} height={500} />
          <Image src="/images/image10/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image10/4.png" alt="Image 10" width={1500} height={500} className="col-span-3" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image12/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image12/4.png" alt="Image 10" width={500} height={500} />
          <Image src="/images/image12/3.png" alt="Image 11" width={500} height={500} />
          <Image src="/images/image12/2.png" alt="Image 12" className="h-full object-cover col-span-3" width={1500} height={500} />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image11/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image11/2.png" alt="Image 10" width={500} height={500} />
          <Image src="/images/image11/3.png" alt="Image 11" width={500} height={500} />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/image13/1.png" alt="Image 9" className="h-full object-cover" width={500} height={500} />
          <Image src="/images/image13/2.png" alt="Image 10" width={500} height={500} />
          <Image src="/images/image13/3.png" alt="Image 11" width={500} height={500} />
        </div>

      </div>
    </div>
  );
}
