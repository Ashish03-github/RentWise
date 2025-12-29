

export type CardType = `${number}`;

export type CardItem = {
    cardIcon: string;
    cardHeading?: string;
    cardText?: string;
    cardSubText: string;
};

export type SummaryCardProps = {
    cardType: CardType;
    cardItem: CardItem;
};