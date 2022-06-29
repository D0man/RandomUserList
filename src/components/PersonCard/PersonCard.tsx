import { PersonCardTile, PersonCardImage, PersonCardCountry, PersonCardTitle } from './PersonCard.styles'

type PersonCardProps = {
    country: string,
    image: string;
    firstName: string;
    secondName: string;
    title: string;
}

export function PersonCard({ country, image, firstName, secondName, title}: PersonCardProps) {
    const personTitle = [title, firstName,secondName].join(' ').replace(/  +/g, ' ')
     return (
        <PersonCardTile>
            <PersonCardImage><img src={image} alt={personTitle}/></PersonCardImage>
            <PersonCardTitle>{personTitle}</PersonCardTitle>
            <PersonCardCountry>{country}</PersonCardCountry>
        </PersonCardTile>
     )
} 