import { Typography, Box, Divider, Avatar, Tabs, Tab } from "@mui/material";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  FavoriteBorder,
  CopyrightRounded,
} from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const DrawerContent = ({ value, handleChange, setDrawerOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  return (
    <>
      <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
        <Avatar
          src={require("../assets/avatar.jpg")}
          variant="rounded"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
            width: "200px",
            height: "200px",
            margin: "0 auto",
          }}
        >
          E I
        </Avatar>
        <Typography variant="h6">عرفان ایراندوست</Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          طراح سایت و توسعه دهنده React JS 🚀
        </Typography>
        <Divider variant="middle" sx={{ mt: 2 }} />

        <Tabs
          orientation="vertical"
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
        >
          <Tab
            onClick={() => setDrawerOpen(false)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 35,
                backgroundColor: pink[800],
                borderRadius: 2,
                m: 1,
              },
            }}
            icon={<HomeRounded />}
            label="خانه"
            iconPosition="start"
            {...tabProps(0)}
          />
          <Tab
            onClick={() => setDrawerOpen(false)}
            icon={<FaceRounded />}
            label="درباره من"
            iconPosition="start"
            {...tabProps(1)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 35,
                backgroundColor: pink[800],
                borderRadius: 2,
                m: 1,
              },
            }}
          />
          <Tab
            onClick={() => setDrawerOpen(false)}
            icon={<TextSnippetRounded />}
            label="رزومه"
            iconPosition="start"
            {...tabProps(2)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 35,
                backgroundColor: pink[800],
                borderRadius: 2,
                m: 1,
              },
            }}
          />
          <Tab
            onClick={() => setDrawerOpen(false)}
            icon={<TerminalRounded />}
            label="نمونه کار ها"
            iconPosition="start"
            {...tabProps(3)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 35,
                backgroundColor: pink[800],
                borderRadius: 2,
                m: 1,
              },
            }}
          />
          <Tab
            onClick={() => setDrawerOpen(false)}
            icon={<MessageRounded />}
            label="نظرات دانشجویان"
            iconPosition="start"
            {...tabProps(4)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 35,
                backgroundColor: pink[800],
                borderRadius: 2,
                m: 1,
              },
            }}
          />
          <Tab
            icon={<ConnectWithoutContactRounded />}
            label="ارتباط با من"
            iconPosition="start"
            {...tabProps(5)}
            sx={{
              "&.MuiTab-root": {
                minHeight: 35,
                backgroundColor: pink[800],
                borderRadius: 2,
                m: 1,
              },
            }}
          />
        </Tabs>
        <Divider variant="middle" sx={{ mt: 2 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          flexGrow: 1,
          height: 100,
        }}
      >
        <Typography variant="subtitle2">
          طراح شده با{" "}
          <FavoriteBorder
            sx={{ color: "red", verticalAlign: "middle", height: 20 }}
          />
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="caption"
          sx={{
            display: "flex",
            justifyContent: "center",
            verticalAlign: "bottom",
          }}
        >
          <CopyrightRounded />
        </Typography>
      </Box>
    </>
  );
};

export default DrawerContent;
