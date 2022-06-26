import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "A first Meetup",
    address: "Some Address 12345 Some City",
    description: "This is our first meetup!",
    image:
      "https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg",
  },
  {
    id: 2,
    title: "A second Meetup",
    address: "Some Address 12345 Some City",
    description: "This is our second meetup!",
    image:
      "https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg",
  },
  {
    id: 3,
    title: "A third Meetup",
    address: "Some Address 12345 Some City",
    description: "This is our third meetup!",
    image:
      "https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg",
  },
  {
    id: 4,
    title: "A fourth Meetup",
    address: "Some Address 12345 Some City",
    description: "This is our fourth meetup!",
    image:
      "https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// Normally, if we want to load a react page
// we will use useState and useEffect to dynamically fetch data and states
// the problem with this is it't not good for SEO
// this is why nextjs helps us with the function getStaticProps()

export async function getStaticProps() {
  // code from here will never reach the end user
  // because code here is only executed during build time
  // so we can do async call here
  // this function has to return an object, and it has to have props item in it
  // this props will be sent to the main component in this page
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // revalidate:10 will make it so our app wil be rebuild every 10 seconds
    revalidate: 10,
  };
}

// export async function GetServerProps(context) {
//   // this function is similar to getStaticProps()
//   // but it runs for every request
//   // you can get access to context props here
//   const { req, res } = context;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
