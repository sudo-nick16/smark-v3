import { Context } from "src/graphql-types/Context";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
    if (!context.user) {
        console.log("context: ", context);
        throw new Error("Not authenticated");
    }
    return next();
};