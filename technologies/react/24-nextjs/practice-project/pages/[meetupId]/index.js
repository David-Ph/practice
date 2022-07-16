import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
  );
}

export async function getStaticPaths() {
  // we need this function if we're loading a dynamic page AND we're using getStaticProps
  // basically what we need to do here is to load up all the possible dynamic values
  // that can be loaded here
  // so in this case, we need to maybe fetch all the meetupId from database
  // but for now let's just hard code it

  // Fetch data from API
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const database = client.db("nextjs_meetups");

  const meetupsCollections = database.collection("meetups");
  const result = await meetupsCollections.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    // what is fallback here?
    // if set to false, if we load into a page where the id is not found here
    // it well return a 404 page
    // if set to true, it will attempt to render the page from server
    fallback: 'blocking',
    paths: result.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const { meetupId } = params;

  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const database = client.db("nextjs_meetups");

  const meetupsCollections = database.collection("meetups");
  const result = await meetupsCollections.findOne({ _id: ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetup: {
        id: result._id.toString(),
        title: result.title,
        image: result.image,
        description: result.description,
        address: result.address,
      },
    },
  };
}
