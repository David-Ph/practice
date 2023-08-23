/* 
? What is binary search tree?
    It's a form of data structure, where each node can have two children, depending if the data is larger or smaller
    if the data is smaller, we store it in the left node children, if the data is bigger, we store it in the right node children
    example:
                            10
                    8               20
                3       6       15      30
? Can we have more than two children?
    yes. example:

            20 50
    10 15   30 35   60 90

    we store 10-15 to the left because it's smaller than 20
    we store 30-35 to the middle because it's inbetween 20-50
    we store 60-90 to the right because it's larger than 50

? So what is m-way search tree?
    basically how many children can a tree have. for the example above, it's a 3 way search tree.
    each node should have the key, a record pointer, and a child pointer
    The problem with this is there is no rule, for example, let's say we put 10 as a data first for 1 a 10-way search tree

            10

    let's insert 20, because 20 is bigger, we **can** put it as the right children of 10

            10
                20
    
    then we put 30

            10
                20
                    30
    
    but then this becomes wrong, we should fill up the first node before creating the next node, but there is no control, we can insert as we like
    that's the problem with m-way search tree, there is no control or guidelines to the creation, you can create as you like

    there must be some rules or guidelines in creating m-way search trees, and those guidelines are called b-trees

? What is a key, record pointer, and a child pointer?
    well a key is a key, it's what is inside the address that a child pointer points to
    a record pointer is a pointer to the data it's pointing to in database
    at the end, all the leaf nodes will form a linked list.

*/