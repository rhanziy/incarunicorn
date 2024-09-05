"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { IReview } from "../../types";
import getIconByAgeGender from "../../util/getIconByAgeGender";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { usePathname } from "next/navigation";
import PwModal from "./PwModal";
import { getMaskedNickname } from "@/app/util/getMaskedNickname";
import { createClient } from "@/config/supabase/client";
import * as styles from "../style.css";
import { flexCenter } from "@/app/styles/container.css";
import theme from "@/app/styles/theme.css";

const categoryText: { [key: string]: string } = {
  join: "보험을 가입하고 싶어요.",
  inquiry: "보험료가 괜찮은지 궁금해요.",
  check: "내 보험 상태를 점검받고 싶어요.",
  claim: "병원비를 청구하고 싶어요.",
  question: "간단한 질문이 있어요.",
};

export const getCategoryString = (category: string): string => {
  return categoryText[category] || "카테고리 없음";
};

export const ReviewItem = ({
  id,
  age,
  gender,
  nickname,
  date,
  password,
  content,
  category,
  deleteIcon = true,
}: IReview & { deleteIcon?: boolean }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.reviewContainer}>
      <div className={flexCenter} style={{ marginBottom: theme.margin.xSmall }}>
        <div className={styles.nameContainer}>
          {getIconByAgeGender({ age, gender })}
          <p style={{ fontSize: theme.fontSize.small }}>
            {age + "대"} {gender === "M" ? "남성" : "여성"}{" "}
            {getMaskedNickname(nickname!)}
          </p>
          <p style={{ fontSize: theme.fontSize.xSmall, color: "#aaa" }}>
            {date}
          </p>
        </div>
        {password && deleteIcon && (
          <>
            <div onClick={() => setIsModalOpen(true)}>
              <ClearRoundedIcon fontSize="small" />
            </div>
            <PwModal
              id={id!}
              password={password}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </>
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
    </div>
  );
};

export const ReviewComponent = ({
  serverReviews,
}: {
  serverReviews: IReview[];
}) => {
  const pathname = usePathname();
  const supabase = createClient();
  const [reviews, setReviews] = useState(serverReviews);

  useEffect(() => {
    setReviews(serverReviews);
  }, [serverReviews]);

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "reviews" },
        (payload) => setReviews((reviews: any) => [...reviews, payload.new])
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [serverReviews]);

  return (
    <>
      {reviews?.map((review, index) => (
        <Box key={index} width={"100%"}>
          <ReviewItem
            {...review}
            deleteIcon={pathname === "/reviews" ? true : false}
          />
        </Box>
      ))}
    </>
  );
};
