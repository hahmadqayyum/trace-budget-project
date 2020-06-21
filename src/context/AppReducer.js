
export default (state, action) => {
    switch (action.type) {
        case'ADD-INCOME':
            return{
                ...state,
                incomeTransactions: [action.payload,  ...state.incomeTransactions]

            }
            case 'ADD-EXPENSE':
                return{
                    ...state,
                    expenseTransactions: [action.payload, ...state.expenseTransactions]
                }
                case 'DELETE-TRANSACTION':
                    return{
                        ...state,
                        incomeTransactions: state.incomeTransactions.filter(
                            (incomeTransaction) => incomeTransaction.id !== action.payload
                        ),
                        expenseTransactions: state.expenseTransactions.filter(
                            (expenseTransaction) => expenseTransaction.id !== action.payload
                        ),
                    }
        default:
            return state;
    }
}