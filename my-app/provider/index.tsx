'use client';

import { Api } from '@/server';
import { createContext, useState } from 'react';
import React from 'react';
import { ContextProps, IContext } from './interface';
import { useStore } from 'zustand';
import accomodationStore from '@/stores/accomodations';
import { IAccomodation } from '@/stores/accomodations/interface';

export const Context = createContext({} as IContext);

export const Provider = ({ children }: ContextProps) => {
  const { setAccomodationList } = useStore(accomodationStore);
  const [loading, setLoading] = useState(false);
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
    }
  };

  const retrieve_by_id = async (id: number) => {
    try {
      const response = await Api.get(`acomodacoes/${id}`, {
        headers: {
          Accept: '*/*'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const retrieve_by_city = async (city: string): Promise<IAccomodation[]> => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{ get_list, retrieve_by_id, retrieve_by_city, loading }}
    >
      {children}
    </Context.Provider>
  );
};
