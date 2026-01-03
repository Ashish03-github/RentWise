
interface PropertyItem {
    image: string,
    propertyName: string,
    propertyAdress: string,
    propertyType: "Room" | "Flat" | "Land",
    propertySatus: "Occupied" | "Vaccant" | "Booked",
    propertyRent: number,
    propertyRentReccurance: "Monthly" | "Yearly" | "Other"
}