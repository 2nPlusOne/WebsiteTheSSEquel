import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentoring",
    description:
        "The Society of Software Engineers provides peer mentoring from 10 AM to 6 PM on weekdays."
};

export default function Page() {
    return (
        <>
            <div className="flex flex-col items-center w-full h-screen max-w-screen-xl">
                <div className="mx-auto px-4 sm: py-16 md:pb-8 max-w-2xl">
                    <div className="text-center flex flex-col items-center w-full">
                        <h1
                            className="bg-gradient-to-t from-primary to-secondary bg-clip-text
                                    text-4xl/[3rem] font-extrabold text-transparent md:text-5xl/[4rem]"
                        >
                            Mentoring
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}