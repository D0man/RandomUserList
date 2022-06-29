import { HeaderStyle, Title } from './Header.styles'

type HeaderProps = {
  title: string;
}

export function Header({title}: HeaderProps) {

    return (
      <HeaderStyle>
        <Title>{title}</Title>
      </HeaderStyle>
    )
  }
  