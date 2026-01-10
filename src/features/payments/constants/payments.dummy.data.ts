import { BUILDING_IMAGE } from "@/features/property/constants/properties.dummy.data";
import { Icons } from "../assets/payments.icons";
import { PaymentStatus, RecentPayment } from "../types/payments.components.type";
import { DUMMY_USER } from "@/features/tenants/constants/tenants.dummy.data";

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
        propertyType: "Room",
        propertyAddress: "shillgaon, khopoli, maharashtra",
        propertyStatus: "Occupied",
        propertyRent: 4000,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly",
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
        propertyType: "Room",
        propertyStatus: "Occupied",
        propertyRent: 4000,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly",
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
        propertyType: "Room",
        propertyStatus: "Occupied",
        propertyRent: 3000,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly",
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
        propertyType: "Room",
        propertyStatus: "Vacant",
        propertyRent: 3500,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly",
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
        propertyType: "Land",
        propertyStatus: "Occupied",
        propertyRent: 25000,
        propertyDeposite: 7000,
        propertyRentRecurrence: "Monthly",
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
    { label: 'All', value: 'all' },
    { label: 'Paid', value: 'paid' },
    { label: 'Partial', value: 'partial' },
    { label: 'Pending', value: 'pending' },
]