/* 
反转一个单链表。
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = head => {
    if (!head || !head.next) return head;
    let pre = null,
        cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    head = pre;
    return head
};