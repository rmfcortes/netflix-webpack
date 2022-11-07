export interface InputFieldProps {
    label: string;
    type?: 'text' | 'date' | 'url' | 'number' | 'select' | 'textarea';
    width?: string;
    placeholder?: string;
    value?: string | number;
}

export type InputProps = Omit<InputFieldProps, 'label' | 'width'>