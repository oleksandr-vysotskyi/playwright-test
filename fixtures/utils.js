
function GenerateUniqueEmail() {
    const timestamp = new Date().getTime();
    return `john.doe${timestamp}@example.com`;
  }
  
  export default  GenerateUniqueEmail;