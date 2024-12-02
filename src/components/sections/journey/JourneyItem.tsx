import { JourneyItemModel } from "../../../data/models/JourneyItemModel"
import { motion } from "framer-motion"

type JourneyItemProps = JourneyItemModel

export function JourneyItem({
    company,
    role,
    roleType,
    startedIn,
    endedIn,
    description,
}: JourneyItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex gap-10 mobile:gap-6"
        >
            <div className="border-2 border-solid text-green-500"></div>

            <div className="flex flex-col gap-4">
                <h1 className="font-baloo_bhai_2 font-bold text-green-500 text-3xl mobile:text-2xl">
                    {company}
                </h1>

                <div>
                    <h2 className="font-bold text-2xl mobile:text-xl">
                        {role} - {roleType}
                    </h2>

                    <span className="opacity-60 text-xl mobile:text-lg">
                        {startedIn} - {endedIn}
                    </span>
                </div>

                <p className="text-xl mobile:text-lg">{description}</p>
            </div>
        </motion.div>
    )
}