import React from 'react';
import { View } from 'react-native';

// Component Props
type VerticalSpacerProps = {
  vertical: number,
  horizontal?: never
}
type HorizontalSpacerProps = {
  vertical?: never,
  horizontal: number
}
type Props = HorizontalSpacerProps | VerticalSpacerProps

const Spacer: React.FC<Props> = ({ horizontal, vertical }) => {

  return (
    <View style={{
      height: vertical ?? 0,
      width: horizontal ?? 0
    }} />
  );
};

export default Spacer;
