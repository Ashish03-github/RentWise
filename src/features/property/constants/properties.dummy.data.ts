import { BUILDING_IMAGE } from ".";
import { PropertyItem } from "../types/proprty.type";


export const propertiesData: PropertyItem[] = [
    {
        image: BUILDING_IMAGE,
        propertyName: "Room Number 1",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Room",
        propertyStatus: "Occupied",
        propertyRent: 4000,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly"
    },
    {
        image: "https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas.jpg",
        propertyName: "Room Number 2",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Room",
        propertyStatus: "Occupied",
        propertyRent: 3500,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly"
    },
    {
        image: "https://media.houseandgarden.co.uk/photos/67dc464c0f2847aedf2da20b/16:9/w_1280,c_limit/Shot05117_RT-production_digital.jpg",
        propertyName: "Room Number 2",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Room",
        propertyStatus: "Occupied",
        propertyRent: 3000,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
        propertyName: "Room Number 1",
        propertyAddress: "mohanwadi, khopoli, maharashtra",
        propertyType: "Room",
        propertyStatus: "Vacant",
        propertyRent: 3500,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Tp_U8vsM4-Z6IO_LPegDBDGmicOfF3XYwg&s",
        propertyName: "Salai Land",
        propertyAddress: "salai gram, khandwa, madhya pradesh",
        propertyType: "Land",
        propertyStatus: "Occupied",
        propertyRent: 25000,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly"
    },
]


export const PROPERTY_TYPE_ITEMS = [
    { label: 'Apartment / Flat', value: 'apartment' },
    { label: 'Independent House', value: 'independent_house' },
    { label: 'Villa', value: 'villa' },
    { label: 'Builder Floor', value: 'builder_floor' },
    { label: 'PG / Hostel', value: 'pg_hostel' },
    { label: 'Office Space', value: 'office' },
    { label: 'Shop / Showroom', value: 'shop' },
    { label: 'Commercial Building', value: 'commercial_building' },
    { label: 'Warehouse / Godown', value: 'warehouse' },
    { label: 'Plot / Land', value: 'plot' },
];