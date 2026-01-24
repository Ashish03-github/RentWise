import React, { useEffect, useMemo, useState } from 'react';
import { Container } from '@/common/components';
import TenantProfileCard from '../components/TenantProfileCard';
import PaymentTabs from '../components/PaymentTabs';
import RentSummaryCard from '../components/RentSummaryCard';
import PaymentHistoryList from '../components/PaymentHistoryList';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectedPaymentByIdSelector } from '../store/payment.selectors';
import { clearSelectedPayment } from '../store/payment.slice';
import { selectProperties } from '@/features/property/store/properties.selectors';

const TABS = ['Rent Summary', 'Payment History'];

type Tenant = {
  name: string;
  property: string;
  leaseStart: string;
  leaseEnd: string;
  profileImage: string;
};

type Rent = {
  fromDate: string;
  toDate: string;
  amount: string;
  dueDate: string;
  status: string;
  isLate: boolean;
  daysLate: number;
};

type PaymentHistoryItem = {
  id: string;
  amount: string;
  method: string;
  type: string;
  date: string;
  isDecuted: boolean;
};

const PaymentDetailsScreen = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const payment = useAppSelector(selectedPaymentByIdSelector);
  const dispatch = useAppDispatch();
  const properites = useAppSelector(selectProperties);
  const selectedProperty = useMemo(
    () => properites.find(p => p.id === payment?.propertyId),
    [payment?.propertyId],
  );

  useEffect(() => {
    return () => {
      dispatch(clearSelectedPayment());
    };
  }, []);

  const tenant = useMemo(() => {
    if (!payment) return null;

    return {
      tenantImage: payment.tenantImage,
      name: payment.tenantName,
      property: selectedProperty?.propertyName,
      leaseStart: payment.leaseStartDate,
      leaseEnd: payment.leaseEndDate,
      profileImage: payment.tenantImage,
    };
  }, [payment]);

  const rentSummary = useMemo(() => {
    if (!payment) return null;

    return {
      fromDate: payment.fromDate,
      toDate: payment.toDate,
      amount: String(payment.paidAmount),
      dueDate: payment.toDate,
      status: payment.paymentstatus,
      isLate: payment.daysLate > 0,
      daysLate: payment.daysLate,
    };
  }, [payment]);

  const paymentHistory = useMemo(() => {
    if (!payment) return [];

    return [
      {
        id: payment.id,
        amount: String(payment.paidAmount),
        method: payment.paymentType,
        type: payment.paymentstatus,
        date: payment.payementDate,
        isDecuted: payment.paymentstatus === 'Paid',
      },
    ];
  }, [payment]);

  if (!payment) return null;

  return (
    <Container buttonLabel="Send Reminder" screenHeading="Payments Details">
      <TenantProfileCard tenant={tenant} />

      <PaymentTabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'Rent Summary' ? (
        <RentSummaryCard rent={rentSummary!} />
      ) : (
        <PaymentHistoryList payments={paymentHistory} />
      )}
    </Container>
  );
};

export default PaymentDetailsScreen;
