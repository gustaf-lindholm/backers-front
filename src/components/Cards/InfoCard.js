import React from "react";
import styled from "styled-components";
import { FormattedMessage, useIntl } from "react-intl";

export default function InfoCard(props) {
  const { messageId } = props;
  const image = require("../../assets/images/fikabröd.jpg");
  const Wrapper = styled.div.attrs({
    className: "fl w-100 w-50-ns border-box overflow-hidden ba bw2 white"
  })``;

  const Cover = styled.div.attrs({
    className: "grow cover bg-center pv5 pv6-l"
  })``;

  const cafebg = { backgroundImage: `url(${image})` };
  // styled.Cover`
  //   background-image: url(${image});
  // `;

  const P = styled.p`
    top: 20%;
    @media screen and (min-width: 60em){
      top: 29%;
    }
  `;
  return (
    <Wrapper>
      <Cover style={cafebg}>
        <div className="h4 bg-near-white o-80 border-box">
        </div>
          <P className="black f4-l f5-m f6 lh-copy flex justify-center items-center h4 w-100 absolute border-box pa4">
            <FormattedMessage id={messageId} />
          </P>
      </Cover>
    </Wrapper>
  );
}
