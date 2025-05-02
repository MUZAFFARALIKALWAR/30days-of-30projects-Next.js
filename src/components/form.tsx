"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { AlertDialogDemo } from "./alert"

// 1) Extend the schema to include all fields
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(7, { message: "Please enter a valid phone number." })
    .max(15, { message: "Please enter a valid phone number." }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  // message: z.string().min(5, {
  //   message: "Message must be at least 5 characters.",
  // }),
  message: z.optional(z.string())
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values)
    // TODO: send data to your CMS or API
    alert("Form submitted successfully!")
    // Reset the form after submission
    form.reset()

  }

  return (
    <main className="bg-blue-500 pb-5 sm:pb-0 md:h-screen">
      <h1 className="text-3xl text-center pt-5 font-bold text-white pb-3 sm:pb-0">
        Contact Us Form
      </h1>
      

      <div className="w-[80%] max-w-screen-md mx-auto bg-gray-600 rounded-lg shadow-lg p-5 md:p-10 md:mt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your name"
                          className="border-white text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="you@example.com"
                          className="border-white text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="123‑456‑7890"
                          className="border-white text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Subject"
                          className="border-white text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />
              </div>

              {/* Right column */}
              <div className="flex flex-col justify-between">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="h-full">
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          rows={8}
                          placeholder="Your message..."
                          className="w-full p-2 border border-white rounded-md text-white bg-transparent"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />

                <div className="flex gap-8 mt-5 justify-center">
                  <Button type="submit" className="bg-blue-500 px-10 cursor-pointer py-4">
                    Send
                  </Button>
                  {/* Use form.reset() so controlled inputs clear properly */}
                  <Button
                    type="button"
                    onClick={() => form.reset()}
                    className="bg-black text-white px-10 py-4 cursor-pointer"
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </main>
  )
}
