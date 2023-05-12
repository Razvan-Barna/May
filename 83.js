// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
// Return the linked list sorted as well.

var deleteDuplicates = function(head) {

    for(let i=0;i<head.length;){

        if(head[i] === head[i+1]){
            head.splice(i,1)

        }else{
         i++
        }
    }
    return head
    
};

console.log('The result is:',deleteDuplicates([1,1,2])) // The result will be [ 1, 2 ].