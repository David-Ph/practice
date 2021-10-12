/* 
text: https://medium.com/@mpjme/cb6f88070205
video: https://www.youtube.com/watch?v=wfMtDGfHWpA
*/

/* 
? inheritance
Robot
 .drive()    CleaningRobot
     .clean()    MurderRobot
     .kill()Animal
 .poop()    Dog
     .bark()    Cat
     .meow()

problem with it is, in case we need to grow our app into like this
it gets complicated

GameObject
  .bark()    Robot
     .drive()        CleaningRobot
          .clean()        MurderRobot
          .kill()          MurderRobotDog    Animal
     .poop()        Dog        Cat
         .meow()
*/

/* 
? composition
*/
const barker = (state) => ({
  bark: () => console.log("Woof, I am " + state.name),
});

const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});

const killer = (state) => ({
  kill: () => console.log(`${state.name} kills!`),
});

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};
const bruno = murderRobotDog("bruno");
bruno.bark(); // "Woof, I am Bruno"
