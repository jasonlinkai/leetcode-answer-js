var addTwoNumbers = function(l1, l2) {
    let firstNode = null;
    const recusive = (node1, node2, prevNode, isRaise) => {
        let val = 0;
        if (node1 && node2) {
            val = (node1.val + node2.val);
        } else if (node1) {
            val = node1.val;
        } else if (node2) {
            val = node2.val;
        }
        const raisedVal = val + (isRaise ? 1 : 0);
        const newNode =  new ListNode(raisedVal % 10);
        
        if (!prevNode)  {
            firstNode = newNode;
        } else {
            prevNode.next = newNode;
        }
            
        if ((node1 && node1.next) || (node2 && node2.next) || raisedVal >= 10) {
            recusive(
                node1 ? node1.next : null,
                node2 ? node2.next : null,
                newNode,
                raisedVal >= 10,
            );   
        }
    }
    recusive(l1, l2);
    return firstNode;
};
