import { AttentionItem, CardItem, QuickActionItem, TenantRentItem } from "../types/components.type";
import { Dashboard_Icons } from "../assets/icons";

export const DashboardSummaryDummyData: Array<CardItem> = [
    {
        cardIcon: Dashboard_Icons.rupee,
        cardHeading: 'Collected',
        cardText: '85,000',
        isAmount: true,
        cardSubText: 'This Month',
    },
    {
        cardIcon: Dashboard_Icons.exclaimation,
        cardHeading: 'Pending',
        cardText: '25,000',
        isAmount: true,
        cardSubText: ' ',
    },
    {
        cardIcon: Dashboard_Icons.home,
        cardHeading: 'Properties',
        cardText: '6 Property',
        cardSubText: '4 occupied',
        isAmount: false,
    },
    {
        cardIcon: Dashboard_Icons.users,
        cardHeading: 'Teanants',
        cardText: '4 Active',
        cardSubText: '',
        isAmount: false,
    },
];

export const DashboardTenantsDummyData: Array<TenantRentItem> = [
    {
        tenantName: "Mojamil Khan",
        propertyName: "Room 1, Shilgaon, Khopoli",
        propertyRent: "4,000",
        rentStatus: "Pending",
    },
    {
        tenantName: "Sarfaraz Ahmad",
        propertyName: "Room 2, Shilgaon, Khopoli",
        propertyRent: "3,500",
        rentStatus: "Paid",
    },
    {
        tenantName: "Shafeek Shaikh",
        propertyName: "Room 3, Shilgaon, Khopoli",
        propertyRent: "3,000",
        rentStatus: "Partial",
    }
]

export const DashboardAttentionDummyData: Array<AttentionItem> = [
    {
        tenantName: "Sarfaraz Ahmad",
        attentionReason: 'Overdue',
        amount: "7,000"
    },
    {
        tenantName: "Shafeek Shaikh",
        attentionReason: 'Pending',
        amount: "5,000"
    },
]

export const DashboardQuickActionsDummyData: Array<QuickActionItem> = [
    {
        iconName: Dashboard_Icons.addHome,
        actionName: "Add Property"
    },
    {
        iconName: Dashboard_Icons.addUsers,
        actionName: "Add Tenant"
    },
    {
        iconName: Dashboard_Icons.addPayment,
        actionName: "Add Payment"
    },
    {
        iconName: Dashboard_Icons.graph,
        actionName: "View Report"
    },
]