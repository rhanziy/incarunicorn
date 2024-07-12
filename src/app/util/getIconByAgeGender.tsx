import FaceIcon from "@mui/icons-material/Face";
import Face2Icon from "@mui/icons-material/Face2";
import Face3Icon from "@mui/icons-material/Face3";
import Face4Icon from "@mui/icons-material/Face4";
import Face5Icon from "@mui/icons-material/Face5";
import Face6Icon from "@mui/icons-material/Face6";

const getIconByAgeGender = ({
  age,
  gender,
}: {
  age: string;
  gender: string;
}) => {
  const ageType = parseInt(age);
  if (gender === "M") {
    if (ageType >= 40 && ageType <= 50) {
      return <FaceIcon />;
    } else if (ageType >= 60) {
      return <Face6Icon />;
    } else if (ageType >= 20 && ageType <= 30) {
      return <Face5Icon />;
    }
  } else if (gender === "F") {
    if (ageType >= 40 && ageType <= 50) {
      return <Face4Icon />;
    } else if (ageType >= 60) {
      return <Face2Icon />;
    } else if (ageType >= 20 && ageType <= 30) {
      return <Face3Icon />;
    }
  }
  return null;
};

export default getIconByAgeGender;
