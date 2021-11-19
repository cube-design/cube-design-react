import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Text } from "../src/components/text/Text"

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
            
            <Div textColor="neutral800" w="50%" p={{ x: "1rem", y: "1rem" }}>
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
            <Text fontFamily="primary" textSize="heading900" textColor="neutral800" textWeight="600" m="15px 0 0 0">Example of use</Text>
            
            <Div textColor="neutral800" w="50%" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading700" textWeight="600" align="left" justify="left">Headline 700 / Paragraph 300</Text>
              <Text fontFamily="primary" textSize="paragraph300" textColor="neutral700" textWeight="400" align="left" justify="left" m="16px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            <Div textColor="neutral800" w="50%" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading600" textWeight="600" align="left" justify="left">Headline 600 / Paragraph 200</Text>
              <Text fontFamily="primary" textSize="paragraph200" textColor="neutral700" textWeight="400" align="left" justify="left" m="8px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            <Div textColor="neutral800" w="50%" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading500" textWeight="00" align="left" justify="left">Headline 500 / Paragraph 100</Text>
              <Text fontFamily="primary" textSize="paragraph100" textColor="neutral700" textWeight="400" align="left" justify="left" m="8px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            <Div textColor="neutral800" w="50%" p={{ x: "1rem", y: "1rem" }}>
              <Text textSize="heading400" textWeight="00" align="left" justify="left">Headline 400 / Paragraph 100</Text>
              <Text textSize="paragraph100" textColor="neutral700" textWeight="400" align="left" justify="left" m="8px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
            <Div textColor="neutral800" w="50%" p={{ x: "1rem", y: "1rem" }}>
              <Text fontFamily="primary" textSize="heading400" textWeight="00" align="left" justify="left" textTransform="uppercase">Caption 200 / Paragraph 100</Text>
              <Text textSize="paragraph100" textColor="neutral700" textWeight="400" align="left" justify="left" m="8px 0 0 0">Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam.</Text>
            </Div>
          </Div>
          

        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;
