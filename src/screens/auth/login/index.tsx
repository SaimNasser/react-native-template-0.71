import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { ABCsvg } from '~assets/svgs';
import { Theme } from '~utils';
import styles from './styles';
import { LoginFormValidation } from './utils';
import { BASE_URL } from '@env';
import { ScreenNames } from '~routes';

const Login = ({ navigation }: NativeStackScreenProps<any>) => {
  const theme = useTheme()
  const { control, formState: { isValid } } = useForm({
    mode: 'all',
    resolver: yupResolver(LoginFormValidation)
  })
  return (
    <ScreenWrapper statusBarColor={theme.colors.primary} scrollType="keyboard">
      <View style={styles.container}>
        <View>
          <ABCsvg />
          {console.log(BASE_URL)}
          <Text>Base url: {BASE_URL}</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
