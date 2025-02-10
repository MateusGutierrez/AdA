import { Button } from '@/components/ui/button';
import accomodationStore from '@/stores/accomodations';
import { IAccomodation } from '@/stores/accomodations/interface';
import { useCallback, useMemo } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useStore } from 'zustand';
import { JSX } from 'react';

export type IsVisibleType = {
  toggle: () => void;
  isFavorite: boolean;
  FavoriteButton: () => JSX.Element;
};

const useToggleFavorite = (acc: IAccomodation | null): IsVisibleType => {
  const { setFavorite, removeFromFavoriteList, favorites } =
    useStore(accomodationStore);
  const isFavorite = useMemo(
    () => (acc ? favorites.some(item => item.id === acc.id) : false),
    [acc, favorites]
  );
  const toggle = useCallback(() => {
    if (!acc) return;
    return isFavorite ? removeFromFavoriteList(acc.id) : setFavorite(acc);
  }, [isFavorite, acc, setFavorite, removeFromFavoriteList]);
  const FavoriteButton = useCallback(
    () => (
      <Button className="bg-white/20 hover:bg-white/30" onClick={toggle}>
        {isFavorite ? (
          <MdFavorite className="text-red-500" />
        ) : (
          <MdFavoriteBorder className="text-gray-300" />
        )}
      </Button>
    ),
    [isFavorite, toggle]
  );
  return useMemo(
    () => ({
      toggle,
      isFavorite,
      FavoriteButton
    }),
    [FavoriteButton, isFavorite, toggle]
  );
};

export default useToggleFavorite;
