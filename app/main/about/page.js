import ButtonRed from "@/componensts/button_red";

export const metadata = {
    title: "About",
}

export default function About() {
    return (
        <>
            <div>
                <h1 className={`text-2xl text-sky-500`}>About</h1>
                <ButtonRed>Click Me</ButtonRed>
            </div>
        </>
    )
}