import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  //   const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <React.Fragment>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

export default FormImagePicker;
