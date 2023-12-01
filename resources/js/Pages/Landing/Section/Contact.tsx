import SocialMedia from "../Partials/SocialMedia";
import emailjs from '@emailjs/browser';

export default function Contact () {
  const sendEmail = (e : any) : void => {
    e.preventDefault();

    emailjs.sendForm(
      "service_td2u8fk", 
      "template_23x58j9", 
      e.target, 
      "5sIEMsNvnH6U0rJXB"
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });

    e.target.reset();
  }

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 container mx-auto pt-20 pb-52">
      <div>
        <h3 className="text-indigo-500 font-semibold text-2xl">Connect with me:</h3>
        <p className="text-justify tracking-wide leading-7 mt-3">Satisfied with me? Please contact me</p>
        <div className="inline-block">
          <SocialMedia />
        </div>
      </div>
      <div>
        <h5 className="text-xl font-semibold mt-5 md:mt-0">Contact me, let’s make magic together</h5>
        <form onSubmit={sendEmail} className="text-white">
          <input type="text" name="name" placeholder="Name :" className="rounded bg-gray-700 p-3 my-5 w-full lg:max-w-lg block border-0" />
          <input type="email" name="email" placeholder="Email :" className="rounded bg-gray-700 p-3 my-5 w-full lg:max-w-lg block border-0"/>
          <textarea name="message" rows={5} placeholder="Message :"  className="rounded bg-gray-700 p-3 my-5 w-full lg:max-w-lg block resize-none border-0" />
          <input type="submit" value="Send" className="bg-indigo-500 border-indigo-500 border-2 border-solid  hover:bg-[#2a1a86] text-white font-bold py-2 rounded px-14" />
        </form>
      </div>
    </section>
  );
}
