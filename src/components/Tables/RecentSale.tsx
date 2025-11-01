import type { ISalesTableProps } from "../../types/props/IRecentSale";

const RecentSalesTable: React.FC<ISalesTableProps> = (props) => {
  const { sales, onViewAll } = props;
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-ui font-bold">Recent Sales</h1>
          {onViewAll && (
            <span
              className="font-ui cursor-pointer hover:text-primary/80"
              onClick={onViewAll}
            >
              View All
            </span>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3">Receipt No.</th>
                <th className="text-left py-2 px-3">Date</th>
                <th className="text-left py-2 px-3">Items</th>
                <th className="text-right py-2 px-3">Total Amount</th>
              </tr>
            </thead>

            <tbody>
              {sales.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text center py-6 text-gray-500">
                    No recent sales
                  </td>
                </tr>
              ) : (
                sales.map((sale) => (
                  <tr key={sale.id}>
                    <td
                      className="text-left py-2 
                    px-3
                    "
                    >
                      <span className="bg-gray-200 rounded font-ui p-1">
                        #{sale.receiptNo}
                      </span>
                    </td>

                    <td className="text-left py-2 px-3">
                      <div className="flex flex-col font bold font-ui text-gray-700">
                        <span className="font-medium">
                          {sale.date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-sm text-gray-500">
                          {sale.date.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </span>
                      </div>
                    </td>

                    <td className="text-left py-2 px-3">
                      <div className="flex flex-col font-bold font-ui">
                        <span className="font-bold">
                          {sale.items.length === 1
                            ? sale.items[0].name
                            : `${sale.items.length} different items`}
                        </span>
                        <span className="text-sm text-gray-500">
                          {sale.items.length === 1
                            ? `Qty: ${sale.items[0].quantity} ${sale.items[0].unit}`
                            : `Total qty: ${sale.items.reduce(
                                (sum, item) => sum + item.quantity,
                                0
                              )} items`}
                        </span>
                      </div>
                    </td>

                    <td className="text-right py-2 px-3 text-green-600">
                      {sale.totalAmount}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentSalesTable;
