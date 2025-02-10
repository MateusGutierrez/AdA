import { FaSearch } from 'react-icons/fa';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCallback, useContext, useState } from 'react';
import { Context } from '@/provider';
import { IAccomodation } from '@/stores/accomodations/interface';
import { toast } from 'react-toastify';
import { FaArrowRotateLeft } from 'react-icons/fa6';

interface Props {
  setList: (list: IAccomodation[]) => void;
}

const Search: React.FC<Props> = ({ setList }) => {
  const [query, setQuery] = useState('');
  const { retrieve_by_city, get_list } = useContext(Context);
  const handleSearch = useCallback(async () => {
    toast
      .promise(retrieve_by_city(query), {
        pending: 'Buscando acomodações...',
        success: 'Busca concluída !',
        error: 'Erro ao buscar acomodações!'
      })
      .then(setList);
  }, [query, retrieve_by_city, setList]);

  const handleGoBack = useCallback(() => {
    get_list();
  }, [get_list]);

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Busque por cidade"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <FaSearch />
      </Button>
      <Button onClick={handleGoBack}>
        <FaArrowRotateLeft />
      </Button>
    </div>
  );
};
export default Search;
