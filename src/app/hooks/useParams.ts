import { useSearchParams } from 'next/navigation';

export function useParams(keyword: string) {
  const searchParams = useSearchParams();
  const getParams = new URLSearchParams(searchParams.toString() || '');
  const currentPage = Number(searchParams.get(keyword)) || 1;

  return {
    getParams,
    currentPage,
  };
}
