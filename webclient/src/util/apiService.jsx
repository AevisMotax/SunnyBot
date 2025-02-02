import queryManager from "./querymanager";


//chat prompts for DeepSeeks AI
export const getChatBalanceWindow = async () => {
  return queryManager('GET', '/llm/balance-chat');
};

// Specific API calls using queryManager
export const getIncomeData = async () => {
    return queryManager('GET', '/income-history');
};
  
  export const getBalanceIncomeData = async () => {
    return queryManager('GET', '/database/balance-history');
  };
  
  export const getCurrentBalance = async () => {
    return queryManager('GET', '/database/current-balance');
  };
  
  export const updateBalance = async (data) => {
    return queryManager('PUT', '/update-balance', data);
  };
  
  export const createTransaction = async (data) => {
    return queryManager('POST', '/create-transaction', data);
  };
  
  export const deleteTransaction = async (transactionId) => {
    return queryManager('DELETE', `/delete-transaction/${transactionId}`);
  };

  export const balanceAdvice = async () => {
    return queryManager('GET', '/llm/balance-chat');
  };