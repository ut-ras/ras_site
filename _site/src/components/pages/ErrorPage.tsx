import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const strings = {
    unknown: "An unexpected error has occurred.",
}

export default function ErrorPage() {
    const error = useRouteError();
    let description = strings.unknown;
    if (isRouteErrorResponse(error)) {
        description = `${error.status} ${error.statusText}`;
    }
    return <main>{description}</main>;
}