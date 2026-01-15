import { AttentionItem, CardItem, PaymentStatus, QuickActionItem, TenantRentItem } from "../types/components.type";
import { Dashboard_Icons } from "../assets/icons";
import { PaymentRoutes, PropertyRoutes, TenantRoutes } from "@/navigation/routes";

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
        actionName: "Add Property",
        navigateTo: PropertyRoutes.addProperty
    },
    {
        iconName: Dashboard_Icons.addUsers,
        actionName: "Add Tenant",
        navigateTo: TenantRoutes.addTenant
    },
    {
        iconName: Dashboard_Icons.addPayment,
        actionName: "Add Payment",
        navigateTo: PaymentRoutes.addPayment
    },
    {
        iconName: Dashboard_Icons.graph,
        actionName: "View Report",
        navigateTo: PaymentRoutes.addPayment
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