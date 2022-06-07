import React, {useMemo} from 'react';
import {
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import styles from './styles';

// Component Props
type VariantType = 'primary' | 'secondary';
interface Props {
  onPress?: () => void;
  children: string;
  containerStyle?: ViewStyle;
  touchableOpacityProps?: TouchableOpacityProps;
  textStyle?: TextStyle;
  textProps?: TextProps;
  variant?: VariantType;
  withShadow?: boolean;
}

const Button = ({
  onPress,
  children = 'Button',
  variant = 'primary',
  withShadow = true,
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
}: Props) => {
  const getStyles = useMemo(() => {
    return {
      container: {
        ...styles.container,
        ...(variant === 'primary'
          ? styles.primaryContainer
          : styles.secondaryContainer),
        ...(withShadow && styles.shadow),
      },
      text: variant === 'primary' ? styles.primaryText : styles.secondaryText,
    };
  }, [variant, withShadow]);

  return (
    <TouchableOpacity
      style={[getStyles.container, containerStyle]}
      onPress={onPress}
      {...touchableOpacityProps}>
      <Text style={[getStyles.text, textStyle]} {...textProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
