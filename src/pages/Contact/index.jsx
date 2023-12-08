/*
 * Author  Vincy.Li
 * Date  2023-11-10 14:41:22
 * LastEditors  Vincy.Li
 * LastEditTime  2023-12-08 15:38:32
 * Description
 */
import { useParams, Outlet } from "react-router";

export default function Contact() {
  const params = useParams();
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div>
      <h2 style={{ color: "#000" }}>from {params.contactId || "??"}</h2>
      <img key={contact.avatar} src={contact.avatar || null} />
      <Outlet />
    </div>
  );
}
