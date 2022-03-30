# When to use Objects?

- When you don't need order
- When you need fast access / insertion and removal
  So when using object, you will always get a constants time
  when you don't need any ordering, objects is an excellent choice

# Big O of Object Methods

- Object.keys() => O(N)
- Object.values() => O(N)
- Object.entries() => O(N)
- hasOwnProperty() => O(1)

# WHen to use Array?

- When you need order
- When you need fast access / insertion and removal

# Big O of Arrays

- Insertion => Depends
- Removal => Depends
- Searching => O(N)
- Access => O(1)

Pushing an item at the end of array is O(1)
problem comes when we try to insert at beginning of array
because the array need to reindex or reorder the whole array
same principle applies to removing or inserting item at end or middle array

# Big O of Arrays Method

- push  =>  O(1)
- pop  =>  O(1)
- shift  =>  O(N)
- unshift  =>  O(N)
- concat  =>  O(N)
- slice  =>  O(N)
- splice  =>  O(N)
- sort  =>  O(N * log N)
- forEach/map/filter/reduce  =>  O(N)

