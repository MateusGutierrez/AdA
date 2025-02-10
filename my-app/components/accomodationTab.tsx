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
import { isEmpty } from 'lodash';
import { Card, CardTitle } from './ui/card';
import { FaSadTear } from 'react-icons/fa';

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
      {isEmpty(accomodationList) && (
        <Card className="p-2 bg-muted flex gap-2 w-fit">
          <CardTitle>Nenhuma acomodação encontrada</CardTitle>
          <FaSadTear className="text-primary" />
        </Card>
      )}
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
