'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import useToggleFavorite from '@/hooks/useToggleFavorite';
import { Context } from '@/provider';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';
import { IoArrowUndo } from 'react-icons/io5';

const Detail = () => {
  const { detailAcc } = useContext(Context);
  const router = useRouter();
  const params = useParams();
  const navigate = useCallback(() => {
    router.push(`/dashboard/`);
  }, [router]);
  const { FavoriteButton } = useToggleFavorite(detailAcc);

  return (
    <div className="flex-col justify-center items-center w-[350px] m-[auto]">
      {Number(params.detail) === Number(detailAcc?.id) ? (
        <>
          {detailAcc?.img && (
            <div className="h-[400px] relative bg-transparent overflow-hidden mt-2">
              <div className="absolute inset-0 z-[1]">
                <Image
                  src={detailAcc?.img}
                  alt="Imagem de Acomodação"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-xl"
                />
              </div>
            </div>
          )}
          <Card className="bg-muted mt-2">
            <CardHeader className="flex">
              <div className="flex items-center justify-between">
                <CardTitle className="text-primary">
                  {detailAcc?.nome}
                </CardTitle>
                <FavoriteButton />
              </div>
              <CardDescription>
                Localização: {detailAcc?.localizacao}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <CardDescription>Descrição:</CardDescription>
              <Label className="p-2 rounded-xl ">{detailAcc?.descricao}</Label>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2 items-center">
                <CardDescription>Preço:</CardDescription>
                <Label>R$ {detailAcc?.preco?.toFixed(2)}</Label>
              </div>
              <Button onClick={navigate}>
                <IoArrowUndo />
              </Button>
            </CardFooter>
          </Card>
        </>
      ) : (
        <Card className="bg-muted mt-2">
          <CardHeader className="flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary">404 Not Found</CardTitle>
              <Button onClick={navigate}>
                <IoArrowUndo />
              </Button>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};
export default Detail;
