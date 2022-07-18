public with sharing class AccountDetailsPractice {
    public AccountDetailsPractice() {
    }
        @AuraEnabled(cacheable=true)
        public static List<Account> fetchAccountDetails(String recordId){
        List<Account> accList = [SELECT Id,Name,Rating,Industry,AccountNumber,(SELECT Id,Name,Phone From Contacts) From Account WHERE Id=:recordId];
        return accList;
        }
        @AuraEnabled(cacheable=true)
       public static List<Account> getDetails() {
           List<Account> accList=[SELECT Id,Name,Rating,Industry,AccountNUmber,ParentId,Parent.Name FROM Account LIMIT 3];
           return accList;
           

        

        
    
}
}