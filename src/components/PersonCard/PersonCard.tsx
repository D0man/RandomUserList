import { PersonCardTile, PersonCardImage, PersonCardCountry, PersonCardTitle } from './PersonCard.styles'

type CardData = {
    country: string,
    image: string;
    firstName: string;
    secondName: string;
    title: string;
}

export function PersonCard({ country, image, firstName, secondName, title}: CardData) {
    const personTitle = [title, firstName,secondName].join(' ').replace(/  +/g, ' ')
     return (
        <PersonCardTile>
            <PersonCardImage><img src={image} alt={personTitle}/></PersonCardImage>
            <PersonCardTitle>{personTitle}</PersonCardTitle>
            <PersonCardCountry>{country}</PersonCardCountry>
        </PersonCardTile>
     )
} 