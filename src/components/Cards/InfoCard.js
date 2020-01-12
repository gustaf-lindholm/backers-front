import React from "react";
import styled from "styled-components";
import { FormattedMessage, useIntl } from "react-intl";

export default function InfoCard(props) {
  const { messageId } = props;
  const image = require("../../assets/images/fikabröd.jpg");
  const Wrapper = styled.div.attrs({
    className: "fl w-third w-50-ns border-box overflow-hidden ba bw2 white"
  })``;

  const Cover = styled.div.attrs({
    className: "grow cover bg-center pv5 pv6-l"
  })``;

  const cafebg = { backgroundImage: `url(${image})` };
  // styled.Cover`
  //   background-image: url(${image});
  // `;
  return (
    <Wrapper>
      <Cover style={cafebg}>
        <div className="flex justify-center h3 items-center">
          <p className="ma-auto bg-black h3 w-100 pa3">
            <FormattedMessage id={messageId} />
          </p>
        </div>
      </Cover>
    </Wrapper>
  );
}
