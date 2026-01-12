

export type CardType = `${number}`;

export type CardItem = {
    cardIcon: string;
    cardHeading?: string;
    cardText?: string;
    isAmount: boolean;
    cardSubText: string;
};

export type SummaryCardProps = {
    cardType: CardType;
    cardItem: CardItem;
};


export type TenantRentItem = {
    tenantName?: string;
    propertyName?: string;
    propertyRent?: string;
    rentStatus?: "Paid" | "Partial" | "Pending";
};
export type TenantRentItemProps = {
    data: TenantRentItem,
    key: string
};


export interface AttentionItem {
    tenantName?: string;
    attentionReason?: string;
    amount?: string;
};

export type AttentionItemProps = {
    data: AttentionItem;
    key: string;
}


export interface QuickActionItem {
    actionName: string,
    iconName: string,
}

export type QuickActionCardProps = {
    data: QuickActionItem,
    key: string
}

