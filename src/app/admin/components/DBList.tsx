import { IContactUser } from '@/app/types';
import { useExcelTemplate } from '../hooks/useExcelTemplate';
import Image from 'next/image';

export const DBList = ({ userList }: { userList: IContactUser[] }) => {
  const { generateTemplate } = useExcelTemplate();

  console.log(userList);

  return (
    <Image
      src={'/images/test.jpeg'}
      width={300}
      height={300}
      alt="test"
    ></Image>
  );
};
