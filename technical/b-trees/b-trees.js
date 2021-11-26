/* 
? What is B-trees?
    Basically, b-trees are nothing but m-way search trees with some rules

? what are the rules?
    - every node, it must be filled at least half before we create a new noed
    - root can have minimum two children
    - All leaf nodes must be at same level
    - the creation process is bottom up

? For example, let's create 4 way b-trees [10, 20, 40, 50]. so each node can have 4 children and 3 keys
            let's insert 10, 20, 40

        10, 20, 40

            uh oh, there is no more space to insert 50. what do we do? we create a new node

        | 10, 20, 40  |   50  |
        
        then we pull 40 up because it's the largest of the left

                    40
            10 20       50

        this is how the tree is created from bottom to  top

? let's insert another key, so it's now [10, 20, 40, 50, 60, 70, 80]

                    40
            10 20       50 60 70

        no more room for 80! let's split the 50 60 70 80 into two nodes

                    40
            10 20       50 60 | 70 80 |

                    40 70

            10 20  |    50 60 | 80 |            
    
? let's insert even another keys. [30, and 35]

                    30 40 70

            10 20  | 35  |  50 60 | 80 |

? let's insert another key again! 5 and 15

                            40
                    15 30       70
        5 10    20  35      50 60   80

? So what is b+ trees?

    it's like b-trees, but only the leaf nodes (the most bottom children) has record pointers.
    Non-leaf nodes will leave it's copies of record pointer into the leaf nodes.
*/