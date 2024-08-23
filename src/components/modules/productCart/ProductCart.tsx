import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IoMdEye } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import CustomizedButtons from "../Button/Button";
import Link from "next/link";
type PostCardProps = {
  img: any;
  title: string;
  shortDescription: string;
  btnTitle: string;
  href:string
};
type childrenType = ReactNode;
export default function RecentProductCard(
  { img, title, shortDescription, btnTitle , href }: PostCardProps,
  Children: childrenType
) {
  return (
    <Link href={href}>
      <Card
        data-aos="fade-up"
        data-aos-duration={`${1000}`}
        sx={{
          width: {xs:"350px" , sm:"350px"},
          height: "auto",
          position: "relative",
          color: "#fff",
          backgroundColor: "#242424",
        }}
      >
        <CardActionArea>
          <Box sx={{ height: "50%" , width:"100%" }}>
            <CardMedia
              component="img"
              height="140"
              width={"100%"}
              image={img?.imgUrl}
              alt={""}
            />
          </Box>
        </CardActionArea>
        <CardContent sx={{ height: "180px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-white"
            sx={{
              fontWeight: "bolder",
              fontSize: "1.2rem",
              height: "50px",
              fontFamily: "faNum",
              color: "#c0aa83",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            className="text-md h-32 flex justify-center text-[#aaa] items-center text-justify"
            sx={{
              marginTop: "1rem",
              fontWeight: "500",
              fontSize: ".8rem",
              height: "100px",
              padding: ".5rem",
              fontFamily: "faNum",
            }}
          >
            {shortDescription?.slice(0, 150) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <CustomizedButtons title={btnTitle} />
        </CardActions>
      </Card>
    </Link>
  );
}
