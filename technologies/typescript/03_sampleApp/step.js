/* 
* install dependencies
npm init -y
npm i express dotenv cors helmet
npm i -D typescript @types/node @types/express @types/dotenv @types/cors @types/helmet

* initialize typescript
npx tsc --init

* install ts-node-dev
npm i -D ts-node-dev

* prepare src/index.ts
* prepare ts-node-dev script

* create file to declare custom item type and functions
src -> src/item.interface.ts -> src/items.interface.ts -> src/items.service.ts

* create controllers
src/items/items.router.ts
*/
