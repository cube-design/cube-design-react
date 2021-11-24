import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Text } from "../src/components/text/Text";
import { Icon } from "../src/components/icon/Icon";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

import { Div, StyleReset, ThemeProvider } from "atomize";

const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

class App extends Component {
  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <Div
            textColor="black900"
            minH="100vh"
            w="100vw"
            d="flex"
            flexDir="column"
            justify="center"
            align="center"
            textSize="display2"
            fontFamily="secondary"
            textWeight="500"
            p={{ x: "1rem", y: "4rem" }}
          >

            <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }} justify="left" align="left">
              <Text fontFamily="primary" textSize="heading900" textColor="neutral800" textWeight="600" m="15px 0 0 0">Heading H-900</Text>
              <Text fontFamily="primary" textSize="heading800" textColor="neutral800" textWeight="600" m="15px 0 0 0">Heading H-800</Text>
              <Text fontFamily="primary" textSize="heading700" textColor="neutral800" textWeight="600" m="15px 0 0 0">Heading H-700</Text>
              <Text fontFamily="primary" textSize="heading600" textColor="neutral800" textWeight="600" m="15px 0 0 0">Heading H-600</Text>
              <Text fontFamily="primary" textSize="heading500" textColor="neutral800" textWeight="600" m="15px 0 0 0">Heading H-500</Text>
              <Text fontFamily="primary" textSize="heading400" textColor="neutral800" textWeight="500" m="15px 0 0 0">Heading H-400</Text>
              <Text fontFamily="primary" textSize="heading300" textColor="neutral800" textWeight="500" m="15px 0 0 0">Heading H-300</Text>
              <Text fontFamily="primary" textSize="heading200" textColor="neutral800" textWeight="600" m="15px 0 0 0">Heading 200</Text>
              <Text fontFamily="primary" textSize="heading100" textColor="neutral800" textWeight="500" m="15px 0 0 0">Heading 100</Text>
              <Text fontFamily="primary" textSize="paragraph300" textColor="neutral800" textWeight="400" m="15px 0 0 0">Paragraph 300</Text>
              <Text fontFamily="primary" textSize="paragraph200" textColor="neutral800" textWeight="400" m="15px 0 0 0">Paragraph 200</Text>
              <Text fontFamily="primary" textSize="paragraph100" textColor="neutral800" textWeight="400" m="15px 0 0 0">Paragraph 100</Text>
              <Text fontFamily="code" textSize="codeMinimal" textColor="neutral800" textWeight="400" m="15px 0 0 0" p="4px 8px" d="inline-block" rounded="2px" bg="neutral50" border="1px solid" borderColor="neutral400">Code Minimal</Text><br />
              <Text fontFamily="code" textSize="codeDefault" textColor="blue600" textWeight="400" m="15px 0 0 0" p="4px 8px" d="inline-block" rounded="2px" bg="blue50" border="1px solid" borderColor="blue200">Code Default</Text>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >

            <Text p={{ x: "1rem"}} fontFamily="primary" textSize="heading900" textColor="neutral800" textWeight="600" m="15px 0 0 0">Example of use</Text>

            <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">Headline 700 / Paragraph 300</Text>
              <Text fontFamily="primary" textSize="paragraph300" textColor="neutral700" textWeight="400" align="left" justify="left" m="16px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading600" textWeight="600" align="left" justify="left">Headline 600 / Paragraph 200</Text>
              <Text fontFamily="primary" textSize="paragraph200" textColor="neutral700" textWeight="400" align="left" justify="left" m="8px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading500" textWeight="00" align="left" justify="left">Headline 500 / Paragraph 100</Text>
              <Text fontFamily="primary" textSize="paragraph100" textColor="neutral700" textWeight="400" align="left" justify="left" m="8px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading400" textWeight="00" align="left" justify="left">Headline 400 / Paragraph 100</Text>
              <Text fontFamily="primary" textSize="paragraph100" textColor="neutral700" textWeight="400" align="left" justify="left" m="8px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading400" textWeight="00" align="left" justify="left" textTransform="uppercase">Caption 200 / Paragraph 100</Text>
              <Text fontFamily="primary" textSize="paragraph100" textColor="neutral700" textWeight="400" align="left" justify="left" m="8px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}} fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">Common Icons</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Sucess" size="20px" m={{ r: "1rem" }} color="green400" />
                <Icon name="Info" size="20px" m={{ r: "1rem" }} color="blue400" />
                <Icon name="Warning" size="20px" m={{ r: "1rem" }} color="yellow400" />
                <Icon name="Danger" size="20px" m={{ r: "1rem" }} color="red400" />
                <Icon name="Search" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Add" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Cross" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Plus" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Refresh" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Filter" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Cog" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Trash" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Edit" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Download" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AerrowLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AerrowRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CaretDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CaretUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="More" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">Product</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="DataRed" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="DataYellow" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="DataGreen" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="Event" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="Audiences" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="Traits" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="Aim" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="UserColored" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="Source" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="Destination" width="32" height="32" viewBox="0 0 32 32" size="36px" m={{ r: "1rem" }} />
                <Icon name="Monitor" size="40px" m={{ r: "1rem" }} />
                <Icon name="SmartPhone" size="40px" m={{ r: "1rem" }} />
                <Icon name="DatabaseOutLine" size="40px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >

              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" bottom="40px" justify="left">Action</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Add" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Remove" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Delete" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TickCircle" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="BanCircle" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Upload" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Download" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Help" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Endorsed" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Cross" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Plus" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Search" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ZoomIn" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ZoomOut" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SearchTemplate" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SearchText" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Import" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Export" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LogOut" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LogIn" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Share" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>

              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Duplicate" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Code" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Translate" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Trash" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Clipboard" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Bookmark" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Chat" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Lock" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Unlock" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Comment" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Object" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GraphRemove" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SendTo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Circle" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Confirm" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Disable" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Repeat" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Reset" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Refresh" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AutomaticUpdates" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="History" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>

              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Filter" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FIlterKeep" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FilterList" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FilterOpen" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FilterRemove" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Insert" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ZoomToFIt" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Build" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Highlight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Draw" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Edit" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Cut" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Unpin" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Paperclicp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Print" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CreditCard" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Tag" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TakeAction" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GitPush" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GitRepo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DeriveColumn" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>

              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Sort" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SortAlphabetical" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SortAlphabeticalDesc" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SortAsc" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SortDesc" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SortNumerical" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SortNumericalDesc" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GreaterThan" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GreaterThanOrEqualTo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LessThan" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LessThanOrEqualTo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Minimize" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Minus" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NotEqualsTo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Slash" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Percentage" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SmallCross" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SmallMinus" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SmallPlus" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SmallTick" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Equals" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>

              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Archive" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="UnArchive" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="BringData" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Changes" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="OneColumn" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TwoColumns" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NewTextbox" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AddToArtifact" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Comparison" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NumberedList" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Numerical" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MergeLinks" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Move" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Locate" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PathSearch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GeoSearch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SignalSearch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PredictiveAnalysis" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Exchange" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SendToGraph" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SocialMedia" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>

              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Maximize" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Select" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Tick" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Undo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Redo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Inheritance" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Fork" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NewLink" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Pivot" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GitNewBranch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GitPull" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GitMerge" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GitCommit" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GitBranch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Unresolve" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Intersection" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Resolve" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RightJoin" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LeftJoin" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="InnerJoin" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Selection" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="SendToMap" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Clean" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GroupObject" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="UnGroupObject" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DragHandleHorizontal" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DragHandleVertical" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Drag" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="UploadingSmall" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SmallCross12" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SMallNewLine" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" bottom="40px" justify="left">Interface</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Cog" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Notification" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NotificationUpdated" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TimeLineEvent" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Calender" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Star" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="StarEmpty" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Flag" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Link" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Console" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Application" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Envelope" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Message" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Person" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NewPerson" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="BlockedPerson" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Follower" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Following" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="People" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="User" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Mugshot" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Dasboard" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Time" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Manual" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Projects" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FLoppyDisk" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HelperManagement" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="label" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="layer" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="layers" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NewLayers" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NewLayer" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NewDrawing" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MultiSelect" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Application" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Presentation" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Widget" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="WidgetButton" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="WidgetFooter" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="WidgetHeader" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Control" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SegmentedControl" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="EyeOpen" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="EyeOn" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="EyeOff" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HandDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HandLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HandRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HandUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Hand" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ThumbsUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ThumbsDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Offline" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="InfoSign" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="WarningSign" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Error" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Issue" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="IssueClosed" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="IssueNew" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Outdated" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Updated" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Stopwatch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Key" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="CaretDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CaretUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CaretLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CaretRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DoubleCaretHorizontal" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DoubleCaretVertical" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CircleArrowDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CircleArrowUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CircleArrowLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CircleArrowRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ChevronLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ChevronRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ChevronUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ChevronDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ChevronForward" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ChevronBackward" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CollapseAll" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DoubleChevronDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DoubleChevronLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DoubleChevronRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DoubleChevronUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="ExpandAll" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowVertical" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowHorizontal" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowBottomLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowBottomRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowTopLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowTopRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ArrowUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SwapVertical" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SwapHorizontal" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Menu" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MenuClose" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MenuOpen" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Path" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Properties" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Property" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DataLineage" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Random" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Feed" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FeedSubscribed" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Compass" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DirectionLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DirectionRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Geolocation" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Map" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MapCreate" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MapMaker" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Airplane" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DriveTime" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KnownVehicle" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="UnknownVehicle" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Taxi" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Truck" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Train" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Tructor" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="OilField" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Rig" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Walk" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SymbolCircle" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="SymbolCross" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SymbolDiamond" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SymbolSquare" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SymbolTriangleDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SymbolTriangleUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ResizeTextArea" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="More" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" bottom="20px" justify="left">Miscellaneous</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Wrench" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Home" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Office" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Briefcase" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Book" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Learning" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Shield" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Badge" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Calculator" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="BankAccount" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Heart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HeartBroken" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Lightbulb" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Torch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Flame" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Tree" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Globe" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GlobeNetwork" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LifeSaver" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Pulse" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Ninja" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>

              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Glass" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Cube" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CubeAdd" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CubeRemove" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Shop" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ShoppingCart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Dollar" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Euro" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Crown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Snowflake" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Asterisk" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Mountain" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Moon" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Dot" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Ring" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FullCircle" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Blank" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Square" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Delta" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NewPrescription" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Prescription" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>

              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="IpAddress" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CellTower" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Satellite" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="IdNumber" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Barcode" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">Data</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Form" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Database" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PieChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DoughnutChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PolygonFilter" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Graph" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HeatMap" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RegressionChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="StepChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ScatterPlot" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="StackedChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="WaterfallChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CurvedRangeChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TimelineAreaChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TimelineChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SeriesAdd" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SeriesConfiguration" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SeriesDerived" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SeriesFiltered" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SeriesSearch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Chart" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="TimelineBarChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HorizontalBarChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GroupedBarChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GanttChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="VerticalBarChartAsc" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="VerticalBarChartDesc" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HorizontalBarChartAsc" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HorizontalBarChartDesc" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TrendingDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TrendingUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DiagramTree" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HeatGrid" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="StackedChart" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Grid" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FlowBranch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FlowEnd" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FlowLinear" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FlowReview" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FlowReviewBranch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Flows" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LayoutLinear" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="LayoutHierarchy" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Layout" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LayoutAuto" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LayoutBalloon" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LayoutCircle" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LayoutGrid" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LayoutGroupBy" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="LayoutSkewGrid" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">Media</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Power" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="VoumeOff" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="VolumeDown" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="VolumeUp" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Desktop" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MobilePhone" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Camera" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MobileVideo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Headset" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Phone" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Simcard" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Media" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Film" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Video" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Music" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Settings" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Tint" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Contrast" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Flash" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Fullscreen" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Keycommand" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Play" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Record" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Stop" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FastBackward" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="StepBackward" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Pause" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="StepForward" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FastForward" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Eject" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ImageRotateLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ImageRotateRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KeyBackspace" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KeyDelete" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KeyControl" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KeyEnter" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KeyEscape" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KeyOption" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KeyShift" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="KeyTab" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">Editor</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Bold" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Italic" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Underline" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Strikethrough" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Citation" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Paragraph" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Font" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Header" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HeaderOne" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HeaderTwo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Style" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Annotation" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ManuallyEnteredData" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Eraser" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignCenter" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignJustify" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RotateDocument" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RotatePage" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="TextHighlight" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="AlignmentBottom" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignmentHorizontalCenter" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignmentLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignmentRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignmentTop" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AlignmentVerticalCenter" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="VerticalDistribution" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="HorizontalDistribution" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="GridView" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="NewGridItem" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">File</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="Box" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Compressed" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Document" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Saved" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DocumentOpen" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="DocumentShare" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FolderClose" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FolderNew" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FolderOpen" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FOlderShared" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="FOlderSharedOpen" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AddToFolder" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Inbox" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="InboxFiltered" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="InboxGeo" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="InboxSearch" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="InboxUpdate" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Cloud" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CloudDownload" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CloudUpload" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="CloudBlock" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>

            <Div w="55%"  d="flex" flexDir="column" justify="left" align="left" p={{ x: "1rem", y: "2rem" }} >
              <Text p={{ x: "1rem"}}fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">Table</Text>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="AddColumnLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AddColumnRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AddRowBottom" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="AddRowTop" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RemoveColumnLeft" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RemoveColumnRight" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RemoveRowBottom" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RemoveRowTop" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="RemoveColumn" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Th" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ThDerived" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ThDisconnect" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ThFiltered" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ThList" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PanelTable" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ColumnLayout" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PageLayout" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PanelStats" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="List" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Columns" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ListDetailView" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
              <Div textColor="neutral800" p={{ x: "1rem", y: "1rem" }}>
                <Icon name="JoinTable" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="MergeColumns" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="SplitColumns" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PivotTable" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="ExcludeRow" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Function" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="PublishFunction" size="20px" m={{ r: "1rem" }} color="neutral600" />
                <Icon name="Variable" size="20px" m={{ r: "1rem" }} color="neutral600" />
              </Div>
            </Div>
          </Div>


        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;
