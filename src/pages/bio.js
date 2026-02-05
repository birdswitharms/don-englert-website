"use client";
import React from "react";
import "../app/globals.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "emailjs-com";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2),
});

const Bio = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values) {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          form.reset();
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Email send failed:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  }

  return (
    <div className="flex min-h-screen flex-col px-6 py-10 sm:flex-row sm:items-center sm:px-24 sm:py-16 gap-12">
      <div className="text-lg text-[#ede0d0] sm:w-1/2">
        <h2 className="text-3xl font-bold text-amber-400 mb-6">About</h2>
        <div className="mb-4 leading-relaxed">
          Don was born in Detroit Michigan where he began studying the Accordion
          at age 5. A few years later his family moved to Los Angeles, where he
          continued his musical studies. In high school he started studying the
          Alto Saxophone and later added the Clarinet, Flute, Oboe, and English
          Horn. At California State University Northridge, he majored in
          Clarinet Performance. He attended the Navy School of Music in
          Washington D.C. while in the Army.
        </div>
        <div className="leading-relaxed">
          After Military service he toured for 9 years with bands such as Buddy
          Rich, Louis Bellson, and the Canadian Rock Band Lighthouse. He settled
          in Toronto, Canada where he has worked as a multi- woodwind
          instrumentalist and freelance musician. He has played in the pit
          orchestra for more than 20 productions in Toronto and Stratford,
          Ontario, and recorded for film, radio, and TV. He has played on more
          than 40 recordings, including two Grammy nominations and three
          platinum records.
        </div>
      </div>
      <div className="sm:w-1/2 w-full max-w-[600px]">
        <h2 className="text-3xl font-bold text-amber-400 mb-2">Get in Touch</h2>
        <p className="text-[#ede0d0] mb-6">Interested in lessons or bookings? Send a message.</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            id="contact-form"
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#ede0d0]">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#f5efe6]"
                      placeholder="Name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#ede0d0]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#ede0d0]">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#f5efe6]"
                      placeholder="Email..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#ede0d0]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#ede0d0]">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-[#f5efe6] h-32"
                      placeholder="Message here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#ede0d0]" />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Bio;
