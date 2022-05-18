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
    title: "A first Meetup",
    address: "Some Address 12345 Some City",
    description: "This is our first meetup!",
    image:
      "https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg",
  },
  {
    id: 3,
    title: "A first Meetup",
    address: "Some Address 12345 Some City",
    description: "This is our first meetup!",
    image:
      "https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg",
  },
  {
    id: 4,
    title: "A first Meetup",
    address: "Some Address 12345 Some City",
    description: "This is our first meetup!",
    image:
      "https://i.pinimg.com/originals/a2/54/41/a25441888989bf8650f2de212c7c0b43.jpg",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
