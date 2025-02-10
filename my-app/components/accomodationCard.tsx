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
import { useCallback, useContext } from 'react';
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
import useToggleFavorite from '@/hooks/useToggleFavorite';
import { Context } from '@/provider';
import { toast } from 'react-toastify';

interface Props {
  className?: string;
  acc: IAccomodation;
}

const AccomodationCard: React.FC<Props> = ({ className, acc }) => {
  const { FavoriteButton } = useToggleFavorite(acc);
  const { retrieve_by_id } = useContext(Context);
  const router = useRouter();
  const handleNavigation = useCallback(async () => {
    toast
      .promise(retrieve_by_id(acc.id), {
        pending: 'Carregando detalhes...',
        success: 'Detalhes carregados!',
        error: 'Erro ao carregar detalhes.'
      })
      .then(() => {
        router.push(`/dashboard/${acc.id}`);
      });
  }, [acc.id, retrieve_by_id, router]);

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
                    onClick={handleNavigation}
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
            <FavoriteButton />
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
