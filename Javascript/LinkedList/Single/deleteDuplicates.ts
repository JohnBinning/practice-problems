/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

type ListNode = {
  next: ListNode | null;
  val: number;
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;
  while (current) {
      let next = current.next;
      while (current.val === next?.val) {
          next = next.next;
      }
      current.next = next;
      current = current.next;
  }
  return head;
};

/*

Given the head of a sorted linked list, delete all duplicates such that each element 
appears only once. Return the linked list sorted as well.

Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/