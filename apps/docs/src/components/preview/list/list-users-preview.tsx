import { Avatar } from "@/registry/core/avatar";
import { List } from "@/registry/core/list";

const users = [
  {
    name: "Musharof Chowdhury",
    email: "chowdhury@pimjo.com",
    avatar: "/docs/images/avatar/avatar-1.webp",
    status: "online"
  },
  {
    name: "Johurul Haque",
    email: "haque@pimjo.com",
    avatar: "/docs/images/avatar/avatar-2.webp",
    status: "away"
  },
  {
    name: "Niaj Morshed",
    email: "morshed@pimjo.com",
    avatar: "/docs/images/avatar/avatar-3.webp",
    status: "offline"
  },
  {
    name: "Ahmed Tusar",
    email: "tusar@pimjo.com",
    avatar: "/docs/images/avatar/avatar-4.webp",
    status: "online"
  }
];

export default function ListUsersPreview() {
  return (
    <List className="max-w-70">
      {users.map((user, index) => (
        <li key={index}>
          <div className="relative">
            <Avatar
              src={user.avatar}
              alt={user.name}
              fallback={user.name.charAt(0)}
            />
            <span
              className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-white ${
                user.status === "online"
                  ? "bg-green-500"
                  : user.status === "offline"
                    ? "bg-red-500"
                    : "bg-yellow-500"
              }`}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-neutral-800">{user.name}</span>
            <span className="text-sm text-neutral-500">{user.email}</span>
          </div>
        </li>
      ))}
    </List>
  );
}
