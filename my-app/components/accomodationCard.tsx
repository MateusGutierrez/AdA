'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { IAccomodation } from '@/stores/accomodations/interface';
import Image from 'next/image';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import accomodationStore from '@/stores/accomodations';
import { useStore } from 'zustand';
import { useCallback, useMemo } from 'react';
import { Label } from './ui/label';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { IoArrowRedo } from 'react-icons/io5';

interface Props {
  className?: string;
  acc: IAccomodation;
}

const AccomodationCard: React.FC<Props> = ({ className, acc }) => {
  const { setFavorite, removeFromFavoriteList, favorites } =
    useStore(accomodationStore);
  const router = useRouter();
  const isFavorite = useMemo(
    () => favorites.some(item => item.id === acc.id),
    [acc.id, favorites]
  );
  const toggleFavorite = useCallback(
    () => (isFavorite ? removeFromFavoriteList(acc.id) : setFavorite(acc)),
    [isFavorite, acc, setFavorite, removeFromFavoriteList]
  );
  const navigate = useCallback(() => {
    router.push(`/dashboard/${acc.id}`);
  }, [acc.id, router]);
  return (
    <Card
      className={cn(
        'w-[350px] h-[400px] relative bg-transparent overflow-hidden',
        className
      )}
    >
      <CardContent className="absolute inset-0 z-[-1]">
        <Image
          src={acc.img}
          alt="Imagem de Acomodação"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </CardContent>

      <CardHeader className="relative z-10 px-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white bg-black/80 p-2 rounded-md w-fit">
            {acc.nome}
          </CardTitle>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="bg-black/80 hover:bg-black/50"
                    onClick={navigate}
                  >
                    <BiSolidMessageSquareDetail className="text-primary" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-2">
                  <p>Detalhes da acomodação</p>
                  <IoArrowRedo />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              className="bg-white/20 hover:bg-white/30"
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <MdFavorite className="text-red-500" />
              ) : (
                <MdFavoriteBorder className="text-gray-300" />
              )}
            </Button>
          </div>
        </div>
        <CardDescription className="text-gray-300 flex justify-between pt-2">
          <Label className="text-white bg-black/80 p-2 rounded-md w-fit">
            Localização: {acc.localizacao}
          </Label>
          <Label className="text-white bg-black/80 p-2 rounded-md w-fit">
            R${acc.preco.toFixed(2)}
          </Label>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AccomodationCard;
