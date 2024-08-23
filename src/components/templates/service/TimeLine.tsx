import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function TimeLine() {
  return (
    <Timeline
      position="alternate"
      sx={{ width: "100%", fontFamily: "faMedium" }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontFamily: "faMedium", color: "#aaa" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          پشتیبانی 24 ساعته
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: {xs:"3rem" ,md:"5rem"} }} />
          <TimelineDot color="primary" variant="outlined">
            <SupportAgentIcon sx={{ fontSize: "4rem !important" }} />
          </TimelineDot>
          <TimelineConnector sx={{ height: {xs:"3rem" ,md:"5rem"} }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2, fontFamily: "faMedium" }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontFamily: "faMedium" }}
          >
            پشتیبانی محصولات
          </Typography>
          <Typography sx={{ fontFamily: "faMedium" }}>مطمئن بخرید</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontFamily: "faMedium", color: "#aaa" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          با گارنتی و ضمانت برگشت یک ساله
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: {xs:"3rem" ,md:"5rem"} }} />
          <TimelineDot color="primary" variant="outlined">
            <WorkspacePremiumIcon sx={{ fontSize: "4rem !important" }} />
          </TimelineDot>
          <TimelineConnector sx={{ height: {xs:"3rem" ,md:"5rem"} }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2, fontFamily: "faMedium" }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontFamily: "faMedium" }}
          >
            گارانتی محصول
          </Typography>
          <Typography sx={{ fontFamily: "faMedium" }}>مطمئن بخرید</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontFamily: "faMedium", color: "#aaa" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          وجود شعب مختلف این مارکت در ایران
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: {xs:"3rem" ,md:"5rem"} }} />

          <TimelineDot>
            <LocalShippingIcon sx={{ fontSize: "4rem !important" }} />
          </TimelineDot>
          <TimelineConnector sx={{ height: {xs:"3rem" ,md:"5rem"} }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontFamily: "faMedium" }}
          >
            ارسال به سرارسر کشور
          </Typography>
          <Typography sx={{ fontFamily: "faMedium" }}>
            در سریع ترین زمان ممکن
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontFamily: "faMedium", color: "#aaa" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          دارای گواهی های بهداشت و اینماد
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: {xs:"3rem" ,md:"5rem"} }} />

          <TimelineDot>
            <CheckCircleIcon sx={{ fontSize: "4rem !important" }} />
          </TimelineDot>
          <TimelineConnector sx={{ height: {xs:"3rem" ,md:"5rem"} }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography  sx={{ fontFamily: "faMedium !important"}} 
            component="span"
          >
            دارای گواهی اعتماد
          </Typography>
          <Typography sx={{ fontFamily: "faMedium" }}>
            معتر ترین و سالم ترین محصولات را در اغتیار شما هموطان قرار میدهیم
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
