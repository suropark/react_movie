import Image from "next/image";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const params = useSearchParams();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const eventId = params.get("id");
    try {
      const res = await fetch("/api/email-registration", {
        method: "POST",
        body: JSON.stringify({ email, eventId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="event_single_page">
      <h1>{data?.title}</h1>
      <Image alt={data?.title} src={data?.image} width={1000} height={500} />
      <p>{data?.description}</p>
      <form className="email_registration" onSubmit={onSubmit}>
        <label htmlFor="email">Your Email Address</label>
        <input ref={inputEmail} type="email" id="email" placeholder="email here" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
