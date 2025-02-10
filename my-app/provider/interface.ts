import { IAccomodation } from '@/stores/accomodations/interface';

export interface ContextProps {
  children: React.ReactNode;
}

export interface IContext {
  get_list: () => void;
  retrieve_by_id: (id: number) => Promise<IAccomodation[] | undefined>;
  retrieve_by_city: (city: string) => Promise<IAccomodation[]>;
  detailAcc: IAccomodation | null;
}
