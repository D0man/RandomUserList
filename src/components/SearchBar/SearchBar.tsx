import { Field, Label, TextInput } from './SearchBar.styles'

type SearchBarProps = {
  id: string;
  change: React.ChangeEventHandler<HTMLInputElement>;
  labelText: string;
  placeholder: string;
}
export function SearchBar({id,placeholder,labelText,change}: SearchBarProps) {
    return (
      <Field>
        <Label htmlFor={id}>{labelText}</Label>
        <TextInput type="text" id={id} onChange={change} placeholder={placeholder} />
      </Field>
    )
  }
  