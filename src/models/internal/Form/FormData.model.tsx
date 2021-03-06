import FormInputValidator from './FormDataValidators.model';

export interface CustomFormInput {
    id: number
    name: string
    value: unknown
    touched?: boolean
    validators?: FormInputValidator[]
    errors?: FormInputValidator[]
}

export interface CustomForm {
    formName: string,
    formInputs: CustomFormInput[];
}
