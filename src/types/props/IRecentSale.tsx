interface SaleItem {
  name: string;
  quantity: number;
  unit: string;
  dosage: string;
}

interface Sale {
  id: number;
  receiptNo: string;
  date: Date;
  items: SaleItem[];
  totalAmount: number;
}

export interface ISalesTableProps {
  sales: Sale[];
  onViewAll?: () => void;
}
