export interface Property {
    id?: string,
    image?: string;
    propertyName: string;
    propertyAddress: string;
    propertyType: 'Apartment / Flat' |
    'Independent House' |
    'Villa' |
    'Builder Floor' |
    'PG / Hostel' |
    'Office Space' |
    'Shop / Showroom' |
    'Commercial Building' |
    'Warehouse / Godown' |
    'Plot / Land';
    propertyStatus: "Occupied" | "Vacant" | "Booked";
    propertyRent: string;
    propertyDeposit: string;
    rentRecurrence: "Monthly" | "Yearly" | "Other";
    note?: string;
}
