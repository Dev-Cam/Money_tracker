import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	const [year, setYear] = useState('2020');

	const filterExpenses = (year) => {
		setYear(year);
		props.onYearChange(year);
	};

	const filteredExpenses = props.data.filter((expense) => {
		return expense.date.getFullYear().toString() === year;
	});

	return (
		<Card className='expenses'>
			<ExpenseFilter selected={year} onYearChange={filterExpenses} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList data={filteredExpenses} />
		</Card>
	);
};
export default Expenses;
