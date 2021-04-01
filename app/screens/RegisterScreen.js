import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  AppForm,
  ErrorMessage,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";

import ActivityIndicator from "../components/ActivityIndicator";
import authRegister from "../api/register";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/UseApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = (props) => {
  const registerApi = useApi(authRegister.register);
  const loginApi = useApi(authApi.login);

  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const response = await registerApi.request(userInfo);
    // console.log("Register.js --- submit registeration", response);
    if (!response.ok) {
      if (response.data) {
        setError(response.data.error);
      } else {
        setError("An unexpected error occured");
        console.log("register -- error response", response);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
    setRegistrationFailed(false);
  };
  return (
    <React.Fragment>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCorrect={false}
            autoCapitalize="none"
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            auotCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default RegisterScreen;
