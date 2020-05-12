/* 
给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。

要求返回这个链表的 深拷贝。 

我们用一个由 n 个节点组成的链表来表示输入/输出中的链表。
每个节点用一个 [val, random_index] 表示：

val：一个表示 Node.val 的整数。
random_index：随机指针指向的节点索引（范围从 0 到 n-1）；
如果不指向任何节点，则为  null 。

输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

 */
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
let copyRandomList = head => {
    if (!head) return null;
    let cur = head,
        res = new Node(),
        tmp = res,
        map = new Map();
    while (cur) {
        tmp.val = cur.val;
        tmp.next = cur.next ? new Node() : null;
        map.set(cur, tmp)
        tmp = tmp.next;
        cur = cur.next;
    }
    tmp = res;
    while (head) {
        tmp.random = head.random ? map.get(head.random) : null;
        tmp = tmp.next;
        head = head.next;
    }
    return res;
};