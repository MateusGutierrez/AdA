'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import accomodationStore from '@/stores/accomodations';
import { head } from 'lodash';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useStore } from 'zustand';

const Detail = () => {
  const { accomodationList } = useStore(accomodationStore);
  const params = useParams();
  const id = Number(params.detail);

  const acc = head(
    accomodationList.filter(accomodation => accomodation.id === id)
  );
  console.log(acc);
  return (
    <div className="flex justify-center w-full p-2 gap-2">
      <div className="w-[350px] h-[400px] relative bg-transparent overflow-hidden">
        <div className="absolute inset-0 z-[1]">
          <Image
            src={acc?.img ?? ''}
            alt="Imagem de Acomodação"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl"
          />
        </div>
      </div>
      <Card className="w-[350px] bg-card">
        <CardHeader>
          <CardTitle className="text-primary">{acc?.nome}</CardTitle>
          <CardDescription>Localização: {acc?.localizacao}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardDescription>Descrição:</CardDescription>
          <Label className="text-justify bg-muted p-2 rounded-xl">
            {acc?.descricao}
          </Label>
        </CardContent>
        <CardFooter className="flex gap-2">
          <CardDescription>Preço:</CardDescription>
          <Label>R$ {acc?.preco?.toFixed(2)}</Label>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Detail;
