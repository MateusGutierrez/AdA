import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IAccomodationStore, IAccomodation } from './interface';
import { toast } from 'react-toastify';

const accomodationStore = create<IAccomodationStore>()(
  persist(
    set => ({
      accomodationList: [],
      favorites: [],
      setAccomodationList: (list: IAccomodation[]) =>
        set({ accomodationList: list }),
      removeFromFavoriteList: (id: number) =>
        set(state => {
          toast.info('Removido dos favoritos !');
          localStorage.setItem(
            'favorites',
            JSON.stringify(state.favorites?.filter(item => item.id !== id))
          );
          return {
            favorites: state.favorites?.filter(item => item.id !== id)
          };
        }),
      setFavorite: (item: IAccomodation) =>
        set(state => {
          toast.success('Adicionado aos favoritos !');
          localStorage.setItem(
            'favorites',
            JSON.stringify([...state.favorites, item])
          );
          return {
            favorites: [...state.favorites, item]
          };
        })
    }),
    {
      name: 'session-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
export default accomodationStore;
