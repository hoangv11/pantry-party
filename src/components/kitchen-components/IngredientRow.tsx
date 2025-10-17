/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';

interface Props {
  id: number;
  ingredientId: number;
  storageId: number;
  name: string;
  // image: string;
  quantity: string;
  updated: string;
  status: 'Good' | 'Low Stock' | 'Out of Stock' | 'Expired';
  onDelete: (ingredientId: number, storageId: number) => void;
  onEdit: (ingredientId: number, storageId: number) => void;
}

const statusColors: Record<Props['status'], string> = {
  Good: 'bg-green-100 text-green-700',
  'Low Stock': 'bg-yellow-100 text-yellow-700',
  'Out of Stock': 'bg-red-100 text-red-700',
  Expired: 'bg-red-100 text-red-700',
};

const IngredientRow: React.FC<Props> = ({
  id,
  name,
  ingredientId,
  storageId,
  // image,
  quantity,
  updated,
  status,
  onDelete,
  onEdit,
}) => (
  <tr key={id} className="border-b">
    <td className="p-3 align-middle" style={{ width: '50px' }}>
      <input type="checkbox" />
    </td>
    <td className="p-3 align-middle" style={{ width: '30%' }}>
      <div className="truncate" title={name}>
        {name}
      </div>
    </td>
    {/* <td className="p-3 align-middle text-xl">{image}</td> */}
    <td className="p-3 align-middle" style={{ width: '20%' }}>{quantity}</td>
    <td className="p-3 align-middle" style={{ width: '18%' }}>{updated}</td>
    <td className="p-3 align-middle" style={{ width: '15%' }}>
      <span className={`px-2 py-1 rounded text-sm whitespace-nowrap ${statusColors[status]}`}>
        {status}
      </span>
    </td>
    <td className="p-3 align-middle" style={{ width: '100px' }}>
      <div className="flex gap-2">
        <button
          className="text-gray-600 hover:text-blue-600"
          onClick={() => onEdit(ingredientId, storageId)}
        >
          ✏️
        </button>
        <button
          className="text-gray-600 hover:text-red-600"
          onClick={() => onDelete(ingredientId, storageId)}
        >
          🗑️
        </button>
      </div>
    </td>
  </tr>
);

export default IngredientRow;
