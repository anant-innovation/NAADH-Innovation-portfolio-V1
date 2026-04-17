import * as z from "zod"
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"




// form schema
const formSchema = z.object({
    "Name": z.string().min(3, "Name cannot be so short"),

    "Email": z
        .email(),

    "Phone Number": z
        .string()
        .min(10, "Enter a valid Phone Number"),

    "Institution Name": z
        .string()
        .min(5, "Please Enter the full name of the institue"),

    "Message": z
        .string()
        .min(5)
})








const Form = () => {


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "Name": "",
            "Email": "",
            "Phone Number": "",
            "Institution Name": "",
            "Message": ""
        }
    })




    const onSubmit = (data) => {


        console.log("working");
        console.log(data)
        toast("We have received your request",{
            position:"bottom-left",
            description:"We will reach back to you shortly",
            className:"text-white bg-black"
            
        })
    }







    return (
        <Card className={" w-[500px] dark"}>


            <CardHeader>
                <CardTitle>Let’s Connect</CardTitle>
                <CardDescription>Have a project in mind or want to collaborate? Fill out the form and we’ll get back to you shortly.</CardDescription>
            </CardHeader>


            <CardContent>
                <form id="ContactUsForm" onSubmit={form.handleSubmit(onSubmit)}>


                    <FieldGroup>



                        {/* name field */}
                        <Controller
                            name="Name"
                            control={form.control}
                            render={({ field, fieldState }) => (

                                <Field data-invalid={fieldState.invalid}>


                                    <FieldLabel htmlFor="ContactUsFormName">
                                        Full Name
                                    </FieldLabel>


                                    <Input
                                        {...field}
                                        id="ContactUsFormName"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Rahul Sharma"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />







                        {/* Email */}
                        <Controller
                            name="Email"
                            control={form.control}
                            render={({ field, fieldState }) => (

                                <Field data-invalid={fieldState.invalid}>


                                    <FieldLabel htmlFor="ContactUsFormEmail">
                                        Email
                                    </FieldLabel>


                                    <Input
                                        {...field}
                                        type="tel"
                                        id="ContactUsFormEmail"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="rahul@example.com"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />











                        {/* Phone Number */}
                        <Controller
                            name="Phone Number"
                            control={form.control}
                            render={({ field, fieldState }) => (

                                <Field data-invalid={fieldState.invalid}>


                                    <FieldLabel htmlFor="ContactUsFormPhoneNumber">
                                        Phone Number (WhatsApp preferred)
                                    </FieldLabel>


                                    <Input
                                        {...field}
                                        type="number"
                                        id="ContactUsFormPhoneNumber"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="+91 98765 43210"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />










                        {/* Institution Name */}
                        <Controller
                            name="Institution Name"
                            control={form.control}
                            render={({ field, fieldState }) => (

                                <Field data-invalid={fieldState.invalid}>


                                    <FieldLabel htmlFor="ContactUsFormInstitutionName">
                                        Organization / Institution
                                    </FieldLabel>


                                    <Input
                                        {...field}
                                        id="ContactUsFormInstitutionName"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="ABC College / XYZ Pvt. Ltd."
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />









                        {/* Message */}
                        <Controller
                            name="Message"
                            control={form.control}
                            render={({ field, fieldState }) => (

                                <Field data-invalid={fieldState.invalid}>


                                    <FieldLabel htmlFor="ContactUsFormMessage">
                                        Your Message
                                    </FieldLabel>

                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="ContactUsFormMessage"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Tell us about your project, requirements, or how we can help..."
                                            autoComplete="off"
                                            rows={6}
                                            className={"h-24"}
                                        />

                                        <InputGroupAddon align="block-end">

                                            <InputGroupText
                                                className={"tabular-nums"}
                                            >
                                                {field.value.length}/200 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <FieldDescription>
                                        Share a few details about your requirements so we can assist you better.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />







                    </FieldGroup>
                </form>
            </CardContent>


            <CardFooter>
                <Field orientation="horizontal">

                    <Button type="button" variant="outline"
                        onClick={() => form.reset()}
                    >Reset</Button>



                    <Button className={"bg-orange text-white hover:bg-orange  hover:cursor-pointer"} type="submit" form="ContactUsForm">Submit</Button>
                </Field>
            </CardFooter>

           
        </Card>
    );
}


export default Form;