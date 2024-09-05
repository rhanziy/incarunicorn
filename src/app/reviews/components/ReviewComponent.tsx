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
    <Box
      sx={{
        padding: 1.5,
        borderRadius: 2,
        backgroundColor: "white",
        filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15))",
      }}
    >
      <Box display="flex" mb={0.5} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"} flexGrow={1}>
          {getIconByAgeGender({ age, gender })}
          <Typography ml={1} mr={1} fontSize={14}>
            {age + "대"} {gender === "M" ? "남성" : "여성"}{" "}
            {getMaskedNickname(nickname!)}
          </Typography>
          <Typography variant="body2" fontSize={12}>
            {date}
          </Typography>
        </Stack>
        {password && deleteIcon && (
          <>
            <Box ml="auto" onClick={() => setIsModalOpen(true)}>
              <ClearRoundedIcon fontSize="small" />
            </Box>
            <PwModal
              id={id!}
              password={password}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </>
        )}
      </Box>

      <Box>
        <Typography mb={0.5} fontWeight={500} fontSize={14}>
          {getCategoryString(category)}
        </Typography>
        <Typography fontSize={14}>{content}</Typography>
      </Box>
    </Box>
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
