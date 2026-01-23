import { BUILDING_IMAGE } from "@/features/property/constants/properties.dummy.data";
import { Icons } from "../assets/payments.icons";
import { PaymentStatus, RecentPayment } from "../types/payments.components.type";
import { DUMMY_USER } from "@/features/tenants/constants/tenants.dummy.data";
import { AddPaymentFormValues } from "../utils/addPayement.form.schema";

export const paymentsInfoDummyData = [
    {
        cardIcon: Icons.rupee,
        cardHeading: 'Collected',
        cardText: '85,000',
    },
    {
        cardIcon: Icons.exclaimation,
        cardHeading: 'Pending',
        cardText: '85,000',
    },
    {
        cardIcon: Icons.calendar,
        cardHeading: 'Total Rent',
        cardText: '85,000',
    }
]

export const recentPaymentsData: RecentPayment[] = [
    {
        image: BUILDING_IMAGE,
        propertyName: "Room Number 1",
        propertyType: "Apartment / Flat",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyStatus: "Occupied",
        propertyRent: "4000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        tenantImage: DUMMY_USER,
        tenantName: "Mojamil Khan",
        leaseStartDate: "01 March 2025",
        leaseEndDate: "01 April 2026",
        paymentstatus: "Paid",
        paidAmount: 4000,
        pendingAmount: 0,
        partialAmount: 0,
        daysLate: 0,
        rentDue: 0,
    },
    {
        image: "https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas.jpg",
        propertyName: "Room Number 2",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Apartment / Flat",
        propertyStatus: "Occupied",
        propertyRent: "4000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        tenantImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4H7mPnTLV9rtqZ7_W5NeAhudM0OXP3UNNQ&s",
        tenantName: "Sarfaraz Ahmad",
        leaseStartDate: "01 March 2025",
        leaseEndDate: "01 March 2026",
        paymentstatus: "Pending",
        paidAmount: 0,
        pendingAmount: 3500,
        partialAmount: 0,
        daysLate: 6,
        rentDue: 0,
    },
    {
        image: "https://media.houseandgarden.co.uk/photos/67dc464c0f2847aedf2da20b/16:9/w_1280,c_limit/Shot05117_RT-production_digital.jpg",
        propertyName: "Room Number 3",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Apartment / Flat",
        propertyStatus: "Occupied",
        propertyRent: "3000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        tenantImage: "https://sriit.ac.in/tool/plugins/images/users/4.jpg",
        tenantName: "Shafeek Shaikh",
        leaseStartDate: "01 March 2025",
        leaseEndDate: "01 March 2026",
        paymentstatus: "Partial",
        paidAmount: 2000,
        pendingAmount: 0,
        partialAmount: 1000,
        daysLate: 6,
        rentDue: 0,
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
        propertyName: "Room Number 2",
        propertyAddress: "mohanwadi, khopoli, maharashtra",
        propertyType: "Apartment / Flat",
        propertyStatus: "Vacant",
        propertyRent: "3500",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        tenantImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR7FvvC_9X1l2xqi2rdkStAHaSRMmg89O_g&s",
        tenantName: "Sarfaraz Khan",
        leaseStartDate: "01 March 2025",
        leaseEndDate: "01 March 2026",
        paymentstatus: "Paid",
        paidAmount: 3000,
        pendingAmount: 0,
        partialAmount: 0,
        daysLate: 0,
        rentDue: 0,
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Tp_U8vsM4-Z6IO_LPegDBDGmicOfF3XYwg&s",
        propertyName: "Salai Land",
        propertyAddress: "salai gram, khandwa, madhya pradesh",
        propertyType: "Plot / Land",
        propertyStatus: "Occupied",
        propertyRent: "25000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        tenantImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ2R9O5THIdzGHJl3RjnK2Bxzj20iYSsMQA&s",
        tenantName: "Shafeekh Khan",
        leaseStartDate: "01 March 2025",
        leaseEndDate: "01 March 2026",
        paymentstatus: "Partial",
        paidAmount: 18000,
        pendingAmount: 0,
        partialAmount: 7000,
        daysLate: 6,
        rentDue: 0,
    },
    {
        image: "https://media.houseandgarden.co.uk/photos/67dc464c0f2847aedf2da20b/16:9/w_1280,c_limit/Shot05117_RT-production_digital.jpg",
        propertyName: "Room Number 3",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyType: "Apartment / Flat",
        propertyStatus: "Occupied",
        propertyRent: "3000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        tenantImage: "https://sriit.ac.in/tool/plugins/images/users/4.jpg",
        tenantName: "Shafeek Shaikh",
        leaseStartDate: "01 March 2025",
        leaseEndDate: "01 March 2026",
        paymentstatus: "Partial",
        paidAmount: 2000,
        pendingAmount: 0,
        partialAmount: 1000,
        daysLate: 6,
        rentDue: 0,
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
        propertyName: "Room Number 2",
        propertyAddress: "mohanwadi, khopoli, maharashtra",
        propertyType: "Independent House",
        propertyStatus: "Vacant",
        propertyRent: "3500",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        tenantImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR7FvvC_9X1l2xqi2rdkStAHaSRMmg89O_g&s",
        tenantName: "Sarfaraz Khan",
        leaseStartDate: "01 March 2025",
        leaseEndDate: "01 March 2026",
        paymentstatus: "Paid",
        paidAmount: 3000,
        pendingAmount: 0,
        partialAmount: 0,
        daysLate: 0,
        rentDue: 0,
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Tp_U8vsM4-Z6IO_LPegDBDGmicOfF3XYwg&s",
        propertyName: "Salai Land",
        propertyAddress: "salai gram, khandwa, madhya pradesh",
        propertyType: "Plot / Land",
        propertyStatus: "Occupied",
        propertyRent: "25000",
        propertyDeposit: "7000",
        rentRecurrence: "Monthly",
        tenantImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ2R9O5THIdzGHJl3RjnK2Bxzj20iYSsMQA&s",
        tenantName: "Shafeekh Khan",
        leaseStartDate: "01 March 2025",
        leaseEndDate: "01 March 2026",
        paymentstatus: "Partial",
        paidAmount: 18000,
        pendingAmount: 0,
        partialAmount: 7000,
        daysLate: 6,
        rentDue: 0,
    },
]


export const STATUS_UI_MAP: Record<
    PaymentStatus,
    {
        label: string;
        badgeStyle: object;
        textStyle: object;
    }
> = {
    Paid: {
        label: 'Paid',
        badgeStyle: {
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
        },
        textStyle: {
            color: '#22C55E',
        },
    },
    Pending: {
        label: 'Pending',
        badgeStyle: {
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
        },
        textStyle: {
            color: '#EF4444',
        },
    },
    Partial: {
        label: 'Partial',
        badgeStyle: {
            backgroundColor: 'rgba(234, 179, 8, 0.1)',
        },
        textStyle: {
            color: '#EAB308',
        },
    },
};

export const recentPaymentsFilterOptions = [
    { label: 'All', value: 'All' },
    { label: 'Paid', value: 'Paid' },
    { label: 'Partial', value: 'Partial' },
    { label: 'Pending', value: 'Pending' },
]

export const payementTypeItems = [
    { label: 'Booking', value: 'Booking' },
    { label: "Rent", value: "Rent" },
    { label: "Deposite", value: "Deposite" },
];


export const rentStatusItems = [
    { label: 'Paid', value: 'Paid' },
    { label: "Pending", value: "Pending" },
    { label: "Partial", value: "Partial" },
];


export const ADD_PAYMENT_FORM_VALUES: AddPaymentFormValues = {
    tenantId: '',
    propertyId: '',
    fromDate: '',
    toDate: '',
    paidAmount: '',
    rentStatus: '',
    paymentType: '',
    note: '',
};



// Mock data - replace with actual data from your state/API
export const tenant = {
    name: 'Rahul Sharma',
    property: 'Greenwood Apartments',
    leaseStart: 'Mar 1, 2024',
    leaseEnd: 'Feb 28, 2025',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
};

export const currentRent = {
    fromDate: '01 Mar 2025',
    toDate: "01 April 2026",
    amount: '15,000',
    dueDate: 'May 5, 2025',
    status: 'Pending',
    isLate: true,
    daysLate: 4,
};

export const payments = [
    {
        id: '1',
        amount: '20,000',
        method: 'UPI',
        type: 'Deposite',
        date: 'May 1, 2024',
        isDecuted: false,
    },
    {
        id: '2',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: false,
    },
    {
        id: '3',
        amount: '20,000',
        method: 'UPI',
        type: 'Deposite',
        date: 'May 1, 2024',
        isDecuted: false,
    },
    {
        id: '4',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: true,
    },
    {
        id: '5',
        amount: '20,000',
        method: 'UPI',
        type: 'Deposite',
        date: 'May 1, 2024',
        isDecuted: false,
    },
    {
        id: '6',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: false,
    },
    {
        id: '7',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: true,
    },
    {
        id: '8',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: false,
    },
    {
        id: '9',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: true,
    },
    {
        id: '10',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: false,
    },
    {
        id: '11',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: false,
    },
    {
        id: '12',
        amount: '20,000',
        method: 'Cash',
        type: 'Rent',
        date: 'Feb 28, 2024',
        isDecuted: false,
    },
];