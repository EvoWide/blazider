import { A } from "solid-start"
import { JSX } from "solid-js"

type Props = {
    children: JSX.Element
}

export const Layout = (props: Props) => {
    return (
        <div>
            <A href="/">Index</A>
            <A href="/about">About</A>

            <div>
                {props.children}
            </div>
        </div>
    )
}