import { MongoClient } from "mongodb";
// Keep in mind that if we import a package
// and then only use it getStaticProps or getServerProps
// The imported package will not be a part of the client side bundle

// Component
import MeetupList from "../components/meetups/MeetupList";

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

  // Fetch data from API
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const database = client.db("nextjs_meetups");

  const meetupsCollections = database.collection("meetups");
  const result = await meetupsCollections.find().toArray();
  client.close();

  return {
    props: {
      meetups: result.map((item) => ({
        title: item.title,
        address: item.address,
        image: item.image,
        id: item._id.toString(),
      })),
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
