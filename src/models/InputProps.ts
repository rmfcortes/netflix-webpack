import { Movie } from "./Movie";

export interface InputFieldProps {
    label: string;
    type?: 'text' | 'date' | 'url' | 'number' | 'select' | 'textarea';
    width?: string;
    placeholder?: string;
    name: keyof Movie;
    required?: boolean;
}

export type InputProps = Omit<InputFieldProps, 'label' | 'width'>