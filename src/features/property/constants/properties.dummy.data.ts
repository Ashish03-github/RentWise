import { Property } from "../types/proprty.type";


export const BUILDING_IMAGE = 'https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas.jpg'


export const ADD_PROPERTY_FORM_DEFAULT_VALUES: Property = {
    id: "1234",
    image: BUILDING_IMAGE,
    propertyName: "Ashish",
    propertyAddress: "242, New Gouri Nagar, Indore",
    propertyType: "Apartment / Flat",
    propertyStatus: "Vacant",
    propertyDeposit: "6000",
    propertyRent: "4000",
    rentRecurrence: "Monthly",
    note: "Good Property",
}

export const propertiesData: Property[] = [
    {
        id: "1",
        image: BUILDING_IMAGE,
        propertyName: "Room Number 1",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Apartment / Flat",
        propertyStatus: "Occupied",
        propertyRent: "4000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        note: ""
    },
    {
        id: "2",
        image: "https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas.jpg",
        propertyName: "Room Number 2",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Apartment / Flat",
        propertyStatus: "Occupied",
        propertyRent: "3500",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        note: ""
    },
    {
        id: "3",
        image: "https://media.houseandgarden.co.uk/photos/67dc464c0f2847aedf2da20b/16:9/w_1280,c_limit/Shot05117_RT-production_digital.jpg",
        propertyName: "Room Number 2",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Apartment / Flat",
        propertyStatus: "Occupied",
        propertyRent: "3000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        note: ""
    },
    {
        id: "4",
        image: "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
        propertyName: "Room Number 1",
        propertyAddress: "mohanwadi, khopoli, maharashtra",
        propertyType: "Apartment / Flat",
        propertyStatus: "Vacant",
        propertyRent: "3500",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        note: ""
    },
    {
        id: "5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Tp_U8vsM4-Z6IO_LPegDBDGmicOfF3XYwg&s",
        propertyName: "Salai Land",
        propertyAddress: "salai gram, khandwa, madhya pradesh",
        propertyType: "Plot / Land",
        propertyStatus: "Occupied",
        propertyRent: "25000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        note: "",
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

export const PROPERTY_ENUM = [
    'Apartment / Flat',
    'Independent House',
    'Villa',
    'Builder Floor',
    'PG / Hostel',
    'Office Space',
    'Shop / Showroom',
    'Commercial Building',
    'Warehouse / Godown',
    'Plot / Land'
]


export const propertyTypeItems = [
    { label: 'Apartment / Flat', value: 'Apartment / Flat' },
    { label: 'Independent House', value: 'Independent House' },
    { label: 'Villa', value: 'Villa' },
    { label: 'Builder Floor', value: 'Builder Floor' },
    { label: 'PG / Hostel', value: 'PG / Hostel' },
    { label: 'Office Space', value: 'Office Space' },
    { label: 'Shop / Showroom', value: 'Shop / Showroom' },
    { label: 'Commercial Building', value: 'Commercial Building' },
    { label: 'Warehouse / Godown', value: 'Warehouse / Godown' },
    { label: 'Plot / Land', value: 'Plot / Land' },
]

export const propertyStatusItems = [
    { label: 'Vacant', value: 'Vacant' },
    { label: "Occupied", value: "Occupied" },
    { label: 'Booked', value: 'Booked' },
];

export const rentRecurrenceItems = [
    { label: 'Monthly', value: 'Monthly' as const },
    { label: 'Yearly', value: 'Yearly' as const },
    { label: 'Other', value: 'Other' as const },
];