'use client';

import React, { useState } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { usePathname } from 'next/navigation';
import { getMaskedNickname } from '@/app/util/getMaskedNickname';
import { flexCenter } from '@/app/styles/container.css';
import theme from '@/app/styles/theme.css';
import { getCategoryString } from '@/app/util/getCategoryString';
import * as styles from '../style.css';
import PwModal from './PwModal';
import getIconByAgeGender from '../../util/getIconByAgeGender';
import { IReview } from '../../types';

const ReviewItem = ({
  id,
  age,
  gender,
  nickname,
  date,
  content,
  category,
  deleteIcon = true,
}: IReview & { deleteIcon?: boolean }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = (open: boolean) => {
    setIsModalOpen(open);
  };

  return (
    <div className={styles.reviewContainer}>
      <div className={flexCenter} style={{ marginBottom: theme.margin.xSmall }}>
        <div className={styles.nameContainer}>
          {getIconByAgeGender({ age, gender })}
          <p style={{ fontSize: theme.fontSize.small }}>
            {`${age}대`} {gender === 'M' ? '남성' : '여성'}{' '}
            {getMaskedNickname(nickname!)}
          </p>
          <p style={{ fontSize: theme.fontSize.xSmall, color: '#aaa' }}>
            {date}
          </p>
        </div>
        {deleteIcon && (
          <div onClick={() => setIsModalOpen(true)}>
            <ClearRoundedIcon fontSize="small" />
          </div>
        )}
      </div>

      <div>
        <p
          style={{
            fontSize: theme.fontSize.small,
            fontWeight: 500,
            marginBottom: theme.margin.xSmall,
          }}
        >
          {getCategoryString(category)}
        </p>
        <p style={{ fontSize: theme.fontSize.small }}>{content}</p>
      </div>

      {isModalOpen && (
        <PwModal id={id} isModalOpen={isModalOpen} handleModal={handleModal} />
      )}
    </div>
  );
};

const ReviewComponent = ({ reviewList }: { reviewList: IReview[] }) => {
  const pathname = usePathname();

  return (
    <>
      {reviewList?.map((review, index) => (
        <div key={index} style={{ width: '100%' }}>
          <ReviewItem {...review} deleteIcon={pathname === '/reviews'} />
        </div>
      ))}
    </>
  );
};

export default ReviewComponent;
