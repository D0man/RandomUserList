import { Field, Label, TextInput } from './SearchBar.styles'

type SearchBarProps = {
  id: string;
  click: () => void;
  labelText: string;
  placeholder: string;
}
export function SearchBar({id,placeholder,labelText,click}: SearchBarProps) {
    return (
      <Field>
        <Label htmlFor={id}>{labelText}</Label>
        <TextInput type="text" id={id} onChange={(event: { target: { value: any } })=>{console.log(event?.target.value)}} placeholder={placeholder} />
      </Field>
    )
  }
  