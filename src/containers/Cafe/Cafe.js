import React from "react";
import { FormattedMessage } from 'react-intl';

export default function Cafe(props) {
  console.log("[CAFE]",props)
  return (
    <FormattedMessage id="cafe.content" />
  )
}