import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import Spacer from '~components/spacer';
import { CommonStyles, height } from '~utils';

// Component Props
type Props = Omit<TextInputProps, "theme"> & {
    control: Control,
    name: string
}

const Input: React.FC<Props> = ({ control, name, ...rest }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <View>
                    <TextInput
                        error={Boolean(error)}
                        {...field}
                        onChangeText={field.onChange}
                        mode='outlined'
                        {...rest}
                    />
                    <Spacer vertical={height(0.5)} />
                    <Text style={CommonStyles.errorText}>{error?.message}</Text>
                    <Spacer vertical={height(0.5)} />
                </View>
            )}
        />
    );
};

export default Input;
