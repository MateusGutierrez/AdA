'use client';

import { Api } from '@/server';
import { createContext, useState } from 'react';
import React from 'react';
import { ContextProps, IContext } from './interface';
import { useStore } from 'zustand';
import accomodationStore from '@/stores/accomodations';
import { IAccomodation } from '@/stores/accomodations/interface';
import { useRouter } from 'next/navigation';

export const Context = createContext({} as IContext);

export const Provider = ({ children }: ContextProps) => {
  const [detailAcc, setDetailAcc] = useState<IAccomodation | null>(null);
  const { setAccomodationList } = useStore(accomodationStore);
  const router = useRouter();

  const get_list = async () => {
    try {
      const response = await Api.get(`acomodacoes`, {
        headers: {
          Accept: '*/*'
        }
      });
      setAccomodationList(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
    }
  };
  const retrieve_by_id = async (
    id: number
  ): Promise<IAccomodation[] | undefined> => {
    try {
      const response = await Api.get(`acomodacoes/${id}`, {
        headers: {
          Accept: '*/*'
        }
      });
      setDetailAcc(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      router.replace('/dashboard');
    } finally {
    }
  };
  const retrieve_by_city = async (city: string): Promise<IAccomodation[]> => {
    try {
      const response = await Api.get(`acomodacoes?cidade=${city}`, {
        headers: {
          Accept: '*/*'
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
    }
  };

  return (
    <Context.Provider
      value={{ get_list, retrieve_by_id, retrieve_by_city, detailAcc }}
    >
      {children}
    </Context.Provider>
  );
};
