import { Box } from "@mui/material";
import Image from "next/image";

const ResponsiveImage = ({
  src,
  alt,
  maxWidth,
  width = "100%",
  center = false,
}: {
  src: string;
  alt: string;
  maxWidth?: number;
  width?: string;
  center?: boolean;
}) => {
  return (
    <Box
      sx={{
        maxWidth,
        width,
        height: "auto",
        position: "relative",
        alignSelf: center ? "center" : "flex-start",
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        priority
        width={100}
        height={100}
        style={{
          objectFit: "cover",
          alignSelf: "center",
        }}
      />
    </Box>
  );
};

export default ResponsiveImage;
