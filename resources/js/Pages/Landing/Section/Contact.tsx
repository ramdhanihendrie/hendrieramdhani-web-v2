import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import SocialMedia from "../Partials/SocialMedia";
import emailjs from '@emailjs/browser';
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import Spinner from "@/Components/Spinner";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputError from "@/Components/InputError";
import { BiMailSend } from "react-icons/bi";

type InputContact = {
  name: string
  email: string
  message: string
}

const FormSuccess = () => {
  return (
    <div className="flex flex-col">
      <BiMailSend size={80}/>
      <h2 className="text-2xl font-bold mb-4">Thank you for reaching out!</h2>
      <p>Your message has been received. We will get back to you soon.</p>
    </div>
  )
}

export default function Contact () {
  const [formSubmitionStatus, setFormSubmitionStatus] = useState('notSubmitted')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputContact>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  })

  const onSubmit: SubmitHandler<InputContact> = (data) => {
    setFormSubmitionStatus("loading")
    emailjs.send(
      "service_td2u8fk", 
      "template_23x58j9", 
      data, 
      "5sIEMsNvnH6U0rJXB"
    ).then(res => {
      console.log(res);
      setFormSubmitionStatus("submitted")
    }).catch(err => {
      console.log(err);
      setFormSubmitionStatus("notSubmitted")
    });
  }

  useEffect(() => {
    if (formSubmitionStatus === "submitted") {
      setTimeout(() => {
        setFormSubmitionStatus("notSubmitted")
      }, 3000);
    }
  }, [formSubmitionStatus])
  

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 container mx-auto pt-20 pb-52">
      <div>
        <h3 className="text-indigo-500 font-semibold text-2xl">Connect with me:</h3>
        <p className="text-justify tracking-wide leading-7 mt-3">Satisfied with me? Please contact me</p>
        <div className="inline-block">
          <SocialMedia />
        </div>
      </div>
      <div className="lg:w-3/4">
        <h5 className="text-xl font-semibold mt-5 md:mt-0 mb-3">Contact me, let’s make magic together</h5>
        {formSubmitionStatus === 'notSubmitted' && (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="Name :"/>}
            />

            {errors.name && <InputError message="This field is required" />}

            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextInput {...field} placeholder="Email :"/>}
            />

            {errors.email && <InputError message="This field is required" />}

            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextAreaInput {...field} placeholder="Message :" rows={5}/>}
            />

            {errors.message && <InputError message="This field is required" />}
            
            <PrimaryButton
              type="submit"
            >
              Send
            </PrimaryButton>
          </form>
        )}
        {formSubmitionStatus === 'loading' && <Spinner />}
        {formSubmitionStatus === 'submitted' && <FormSuccess />}
      </div>
    </section>
  );
}
