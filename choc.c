#include<stdio.h>


void main(){
        int rup,i,count;
        printf("=> How MUch ruppes do you gave :");
        scanf("%d",&rup);
        count=rup;
        int temp=0;
        for(i=1;i<=rup;i++){
                if(rup%3==0){
                        count++;
                        temp ++;
                        rup=rup-3;
                }
                if(temp%3==0){
                        count++;
                        temp=temp-3;
                }
        }
        
printf("=> Total Chocolate is : %d",count+1);

}