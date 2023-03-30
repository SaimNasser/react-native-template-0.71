import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { ABCsvg } from '~assets/svgs';
import { Theme } from '~utils';
import styles from './styles';
import { LoginFormValidation } from './utils';
import Config from 'react-native-config';

const Login = ({ navigation }: NativeStackScreenProps<any>) => {
  if (typeof HermesInternal === 'undefined') {
    console.log('Hermes is not enabled');
  } else {
    console.log('Hermes is enabled');
  }
  const {
    control,
    formState: { isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(LoginFormValidation),
  });
  console.log('BASE URL: ', Config.BASE_URL);
  return (
    <ScreenWrapper statusBarColor={Theme.colors.primary} scrollType="keyboard">
      <View style={styles.container}>
        <View>
          <ABCsvg />
          <Text>Base url: {Config.BASE_URL}</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
