import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { View, Text, TextInput } from 'react-native';
import Spacer from '~components/spacer';
import { CommonStyles, height } from '~utils';

// Component Props
type Props = Omit<any, 'theme'> & {
  control: Control;
  name: string;
};

const Input: React.FC<Props> = ({ control, name, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <View>
          <TextInput {...field} onChangeText={field.onChange} {...rest} />
          <Spacer vertical={height(0.5)} />
          <Text style={CommonStyles.errorText}>{error?.message}</Text>
          <Spacer vertical={height(0.5)} />
        </View>
      )}
    />
  );
};

export default Input;
