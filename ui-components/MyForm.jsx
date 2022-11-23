/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
export default function MyForm(props) {
    const { onSubmit, onCancel, onValidate, onChange, overrides, ...rest } = props;
    const initialValues = {
        firstname: undefined,
        lastname: undefined
    };
    const [firstname, setFirstname] = React.useState(initialValues.firstname);
    const [lastname, setLastname] = React.useState(initialValues.lastname);
    const [errors, setErrors] = React.useState({});
    const resetStateValues = () => {
        setFirstname(initialValues.firstname);
        setLastname(initialValues.lastname);
        setErrors({});
    };
    const validations = {
        firstname: [],
        lastname: []
    };
    const runValidationTasks = async (fieldName, value) => {
        let validationResponse = validateField(value, validations[fieldName]);
        const customValidator = fetchByPath(onValidate, fieldName);
        if (customValidator) {
            validationResponse = await customValidator(value, validationResponse);
        }
        setErrors(errors => ({ ...errors, [fieldName]: validationResponse }));
        return validationResponse;
    };
    return (<Grid as="form" rowGap="15px" columnGap="15px" padding="20px" onSubmit={async (event) => {
            event.preventDefault();
            const modelFields = {
                firstname,
                lastname
            };
            const validationResponses = await Promise.all(Object.keys(validations).reduce((promises, fieldName) => {
                if (Array.isArray(modelFields[fieldName])) {
                    promises.push(...modelFields[fieldName].map(item => runValidationTasks(fieldName, item)));
                    return promises;
                }
                promises.push(runValidationTasks(fieldName, modelFields[fieldName]));
                return promises;
            }, []));
            if (validationResponses.some(r => r.hasError)) {
                return;
            }
            await onSubmit(modelFields);
        }} {...rest} {...getOverrideProps(overrides, "MyForm")}><TextField label="First name" onChange={e => {
            let { value } = e.target;
            if (onChange) {
                const modelFields = {
                    firstname: value,
                    lastname
                };
                const result = onChange(modelFields);
                value = result?.firstname ?? value;
            }
            if (errors.firstname?.hasError) {
                runValidationTasks("firstname", value);
            }
            setFirstname(value);
        }} onBlur={() => runValidationTasks("firstname", firstname)} errorMessage={errors.firstname?.errorMessage} hasError={errors.firstname?.hasError} {...getOverrideProps(overrides, "firstname")}></TextField><TextField label="Last name" onChange={e => {
            let { value } = e.target;
            if (onChange) {
                const modelFields = {
                    firstname,
                    lastname: value
                };
                const result = onChange(modelFields);
                value = result?.lastname ?? value;
            }
            if (errors.lastname?.hasError) {
                runValidationTasks("lastname", value);
            }
            setLastname(value);
        }} onBlur={() => runValidationTasks("lastname", lastname)} errorMessage={errors.lastname?.errorMessage} hasError={errors.lastname?.hasError} {...getOverrideProps(overrides, "lastname")}></TextField><Flex justifyContent="space-between" {...getOverrideProps(overrides, "CTAFlex")}><Button children="Clear" type="reset" onClick={resetStateValues} {...getOverrideProps(overrides, "ClearButton")}></Button><Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}><Button children="Cancel" type="button" onClick={() => { onCancel && onCancel(); }} {...getOverrideProps(overrides, "CancelButton")}></Button><Button children="Submit" type="submit" variation="primary" isDisabled={Object.values(errors).some(e => e?.hasError)} {...getOverrideProps(overrides, "SubmitButton")}></Button></Flex></Flex></Grid>);
}
