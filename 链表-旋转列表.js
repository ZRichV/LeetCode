/* 
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = (head, k) => {
    if (!head || k === 0) return head;
    let p = head;
    let len = 1;
    while (p.next) {
        p = p.next;
        len++;
    }
    k = len - k % len;
    p.next = head;
    while (k--) p = p.next;
    head = p.next;
    p.next = null;
    return head;
};