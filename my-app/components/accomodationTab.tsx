'use client';

import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import AccomodationCard from './accomodationCard';
import { IAccomodation } from '@/stores/accomodations/interface';

interface Props {
  className?: string;
  accomodationList?: IAccomodation[] | null;
}

const AccomodationTab: React.FC<Props> = ({ className, accomodationList }) => {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className="w-full"
    >
      <CarouselContent>
        {accomodationList?.map((acc, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <AccomodationCard className={className} acc={acc} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default AccomodationTab;
