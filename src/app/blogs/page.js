import Link from "next/link";

const NavLinks = [
  {
    id: 1,
    year: 1234,
    title: "title-1",
  },
  {
    id: 2,
    year: 2234,
    title: "title-2",
  },
  {
    id: 3,
    year: 3234,
    title: "title-3",
  },
  {
    id: 4,
    year: 4234,
    title: "title-4",
  },
];
const page = () => {
  return (
    <div className="container">
      {NavLinks.map(({ id, year, title }) => (
        <Link className="block border border-blue-500 my-2 p-2" href={`/blogs/${year}/${id}`} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default page;
