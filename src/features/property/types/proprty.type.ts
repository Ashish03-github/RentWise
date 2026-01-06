export interface PropertyItem {
    image: string;
    propertyName: string;
    propertyAddress: string;
    propertyType: "Room" | "Flat" | "Land";
    propertyStatus: "Occupied" | "Vacant" | "Booked";
    propertyRent: number;
    propertyDeposite: number;
    propertyRentRecurrence: "Monthly" | "Yearly" | "Other";
    note?: string;
}
