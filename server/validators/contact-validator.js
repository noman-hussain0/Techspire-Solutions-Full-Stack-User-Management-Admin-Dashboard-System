const { z } = require("zod");

const contactSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters long" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email format" }),

    message: z
        .string({ required_error: "Message is required" })
        .trim()
        .min(10, { message: "Message must be at least 10 characters long" }),
});

module.exports = contactSchema;