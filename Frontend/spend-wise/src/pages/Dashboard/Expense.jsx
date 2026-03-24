import React,{useState} from 'react'

const Expense = () => {
   const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
  };
  return (
    <div className='p-6'>
      <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
      <form onSubmit={handleAddExpense}>
        <input type="text"
        placeholder='Expense title'
        className='border p-2 mr-2 rounded '
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        
        />
         <input
          type="number"
          placeholder="Amount"
          className="border p-2 mr-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Add
        </button>


      </form>
      {/* List */}
      <div>
        {expenses.length === 0 ? (
          <p>No expenses added</p>
        ) : (
          expenses.map((exp) => (
            <div key={exp.id} className="border p-3 mb-2 rounded">
              <p className="font-medium">{exp.title}</p>
              <p className="text-gray-600">₹ {exp.amount}</p>
            </div>
          ))
        )}
      </div>

      
    </div>
  )
}

export default Expense
