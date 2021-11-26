/* 
! https://www.youtube.com/watch?v=aZjYr87r1b8

? How is disk structured?
    A disk is divided vertically by sectors, and horizontally by tracks. and each part in those sectors and tracks are called blocks.
    Each block can hold 512 bytes, and each block has its own addresses, and inside of those blocks has 512 offset.
    So in order to get an adress of a single byte, we need to know track numbers, sector numbers, and block numbers

? What is data structures?
    Basically, data structure is how a data is stored on the disk

? How is indexing useful?
    So let's say that we want to store 1000 data that has a size of 128 bytes each. This means that each block could only hold 4 data
    so in order to store all of it, we need 250 blocks. If we want to look for a specific data, we have to look at all those 250 blocks

    In that case, indexes can help us. So we create another table of data that stores the pointer of the address of the data we want, for example
    we store 
    
    | eid | pointer |
    | 1   | block1  |
    | 2   | block1  |
    | 3   | block2  |
    | 4   | block2  |

    and because this data is smaller, let's say 16 bytes we'd need less blocks to store it. so instead of looking at 250 blocks, 
    we only look for 32 blocks ( 512 / 16  = 32, 1000 / 32 = 31.25 )

? What is multi level indexing?

    But what if 32 blocks is still too many? We create another index table, that stores where each eid is stores. for example

    | eid | pointer-to-index-tree |
    | 1-32   | block1   |
    | 33-64   | block1  |
    | 65-96   | block2  |
    | 97-128   | block2  |

    so if we want to look for number 35, we go look at the highest tree, and then look at the next tree, and until we find the data.



*/