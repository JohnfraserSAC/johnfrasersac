import { mentorRegistrationLink, workshopLeadRegistrationLink } from "@util/config";

export default function TopBanner({ showBanner }: { showBanner: boolean }) {
    return (
        <div className={`flex items-center justify-center w-full p-2 md:px-8 bg-emerald-900 ${showBanner ? "min-h-12" : "h-0 hidden"} transition-all duration-300`}>
            <p className="text-gray-200 text-center text-lg">
                    <a 
                        className="text-blue-400 hover:underline duration-150 font-medium"
                        href={mentorRegistrationLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Mentor
                    </a>
                {" "}
                and
                {" "}
                    <a 
                        className="text-blue-400 hover:underline duration-150 font-medium"
                        href={workshopLeadRegistrationLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Workshop Lead
                    </a>
                {" "}
                applications are
                {" "}
                <b>open</b>!
                Click the links for more info.
            </p>
        </div>
    )
}