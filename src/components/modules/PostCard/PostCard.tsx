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
type PostCardProps = {
  img: string;
  title: string;
  shortDescription: string;
};
type childrenType = ReactNode;
export default function RecentPostCard(
  { img, title, shortDescription }: PostCardProps,
  Children: childrenType
) {
  return (
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
      <div className="bg-blend-multiply absolute w-full h-full bg-[#000000b3] z-[100]">
        <button className="soon bg-[#b34204] text-white">به زودی</button>
      </div>
      <CardActionArea>
        <Box sx={{ height: "50%" }}>
          <CardMedia
            component="img"
            height="140"
            width={"100%"}
            image={img}
            alt={""}
          />
        </Box>
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-white"
          sx={{
            fontWeight: "bolder",
            fontSize: "1.2rem",
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
            fontFamily: "faNum",
          }}
        >
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomizedButtons title="ادامه ..." />
      </CardActions>
      <CardContent className="bg-black relative">
        <Typography variant="body2" className="relative" color="text.secondary">
          <div className="grid grid-cols-1">
            <div className="date_post grid grid-cols-1 bg-[#242424] p-0  w-full">
              <div className="date-post text-white"></div>
              <div className="user_process bg-black mb-0 px-4 py-2 relative bottom-0 faNum">
                <div className="flex flex-row-reverse justify-center items-center text-white gap-10">
                  <span className="text-center pl-4 text-[#c0aa83] font-black text-2xl">
                    25
                  </span>
                  <div className="flex-1 text-lg flex flex-col text-left items-center justify-center">
                    september <span>2017</span>
                  </div>
                  <div className="user_activity flex justify-start items-center flex-1">
                    <p className="flex justify-center items-center">
                      <BiMessageRoundedDots />
                      <span className="px-2">4</span>
                    </p>
                    <p className="flex justify-center items-center">
                      <IoMdEye />
                      <span className="px-2">210,00</span>
                    </p>
                  </div>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
