"use client";

import { SectorGroup } from "@/types/portfolio";

type Props = {
  data: SectorGroup[];
};

export default function PortfolioTable({ data }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg">
      <table className="w-full border-collapse bg-white">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Sector / Symbol</th>
            <th className="p-3">Qty</th>
            <th className="p-3">Purchase</th>
            <th className="p-3">CMP</th>
            <th className="p-3">Investment</th>
            <th className="p-3">Present Value</th>
            <th className="p-3">Gain/Loss</th>
            <th className="p-3">Portfolio %</th>
            <th className="p-3">NSE/BSE</th>
            <th className="p-3">P/E Ratio</th>
          </tr>
        </thead>

        <tbody>
          {data.map((sector) => {
            const sectorProfit = sector.gainLoss >= 0;

            return (
              <>
                {/* ✅ Sector Row */}
                <tr
                  key={sector.sector}
                  className="bg-gray-50 border-t-4 border-gray-200"
                >
                  <td className="p-3 font-bold text-lg">
                    {sector.sector}
                  </td>

                  <td colSpan={3}></td>

                  <td className="p-3 font-semibold">
                    ₹{sector.totalInvestment.toLocaleString()}
                  </td>

                  <td className="p-3 font-semibold">
                    ₹{sector.totalPresentValue.toLocaleString()}
                  </td>

                  <td
                    className={`p-3 font-bold ${
                      sectorProfit
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    ₹{sector.gainLoss.toLocaleString()}
                  </td>

                  <td></td>
                </tr>

                {/* ✅ Stocks */}
                {sector.stocks.map((stock) => {
                  const isProfit = stock.gainLoss >= 0;

                  return (
                    <tr key={stock.symbol} className="border-b">
                      <td className="p-3 pl-8 font-medium">
                        {stock.symbol}
                      </td>

                      <td className="p-3">{stock.quantity}</td>

                      <td className="p-3">
                        ₹{stock.purchasePrice}
                      </td>

                      <td className="p-3">₹{stock.cmp}</td>

                      <td className="p-3">
                        ₹{stock.investment.toLocaleString()}
                      </td>

                      <td className="p-3">
                        Rs{stock.presentValue.toLocaleString()}
                      </td>

                      <td
                        className={`p-3 font-semibold ${
                          isProfit
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        ₹{stock.gainLoss.toLocaleString()}
                      </td>

                      <td className="p-3">
                        {stock.portfolioPercent?.toFixed(2)}%
                      </td>
                      
                       <td className="p-3">
                        {stock.exchange}
                      </td>
                        <td className="p-3">
                          {stock.peRatio}
                        </td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
