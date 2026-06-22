import React from 'react'
import {getCategoryIcon} from '../../utils/categoryIcons'
const TransactionItem  = ({ txn }) => {
    const Icon = getCategoryIcon(txn.category);
  return (
   <div className="flex items-center justify-between border-b last:border-0 pb-3 last:pb-0">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
          <Icon size={16} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">{txn.title || txn.category}</p>
          <p className="text-xs text-gray-400">
            {txn.category} • {new Date(txn.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <p className={`text-sm font-semibold ${txn.type === "income" ? "text-green-600" : "text-red-500"}`}>
        {txn.type === "income" ? "+" : "-"}₹{txn.amount.toLocaleString()}
      </p>
    </div>
  )
}

export default TransactionItem;
