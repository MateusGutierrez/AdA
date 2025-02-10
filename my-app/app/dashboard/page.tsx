'use client';

import AccomodationTab from '@/components/accomodationTab';
import Search from '@/components/search';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import accomodationStore from '@/stores/accomodations';
import { isEmpty } from 'lodash';
import { FaSadTear } from 'react-icons/fa';
import { FaHotel } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import { useStore } from 'zustand';

const Dashboard: React.FC = () => {
  const { accomodationList, favorites, setAccomodationList } =
    useStore(accomodationStore);

  return (
    <Tabs defaultValue="accomodations" className="w-full pt-2">
      <div className="flex justify-end">
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger
            value="accomodations"
            className="flex items-center gap-2"
          >
            <FaHotel />
            Acomodações
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <MdFavorite />
            Favoritos
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="accomodations">
        <Card>
          <CardHeader>
            <div className="sm:flex justify-between items-center">
              <CardTitle className="pb-2">Acomodações</CardTitle>
              <Search setList={setAccomodationList} />
            </div>
            <CardDescription>
              Aqui está a lista de acomodações disponíveis.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <AccomodationTab accomodationList={accomodationList} />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="favorites">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Favoritos</CardTitle>
              <CardTitle className="flex gap-2">
                Total de favoritos:{' '}
                <CardTitle className="text-primary flex gap-2">
                  {favorites.length}
                  <MdFavorite />
                </CardTitle>
              </CardTitle>
            </div>
            <CardDescription>
              Aqui estão suas acomodações favoritadas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {isEmpty(favorites) ? (
              <div className="flex gap-2">
                <CardTitle>Nenhuma acomodação foi favoritada </CardTitle>
                <FaSadTear className="text-primary" />
              </div>
            ) : (
              <AccomodationTab accomodationList={favorites} />
            )}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
export default Dashboard;
