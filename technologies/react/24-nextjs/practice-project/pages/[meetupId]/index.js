import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The Meetup Description"
    />
  );
}

export function getStaticPaths() {
  // we need this function if we're loading a dynamic page AND we're using getStaticProps
  // basically what we need to do here is to load up all the possible dynamic values
  // that can be loaded here
  // so in this case, we need to maybe fetch all the meetupId from database
  // but for now let's just hard code it
  return {
    // what is fallback here?
    // if set to false, if we load into a page where the id is not found here
    // it well return a 404 page
    // if set to true, it will attempt to render the page from server
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
      {
        params: {
          meetupId: "3",
        },
      },
      {
        params: {
          meetupId: "4",
        },
      },
    ],
  };
}
export function getStaticProps(context) {
  const { params } = context;
  const { meetupId } = params;

  return {
    props: {
      meetup: {
        id: meetupId,
        image:
          "https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg",
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The Meetup Description",
      },
    },
  };
}
