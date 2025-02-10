export interface IAccomodation {
  id: number;
  img: string;
  localizacao: string;
  nome: string;
  preco: number;
  descricao: string;
}

export interface IAccomodationStore {
  accomodationList: IAccomodation[];
  favorites: IAccomodation[];
  setAccomodationList: (list: IAccomodation[]) => void;
  setFavorite: (accomodation: IAccomodation) => void;
  removeFromFavoriteList: (id: number) => void;
}
