import React from "react";
import styled from "styled-components";
import { FormattedMessage, FormattedHTMLMessage} from "react-intl";

export default function InfoCard(props) {
  const { messageId } = props;
  const image = `https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/${props.image}.jpg`;
  const Wrapper = styled.div.attrs({
    className: "fl w-100 w-50-ns border-box overflow-hidden ba bw2 white"
  })``;

  const Cover = styled.div.attrs({
    className: "grow cover bg-center pv5 pv6-l"
  })``;

  const background = { backgroundImage: `url(${image})` };
  // styled.cover`
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
      <Cover style={background}>
        <div className="h4 bg-near-white o-80">
        </div>
          <P className="black f4-l f5-m f6 lh-copy flex justify-center items-center h4 w-100 absolute pa4">
            <FormattedHTMLMessage id={messageId} />
          </P>
      </Cover>
    </Wrapper>
  );
}