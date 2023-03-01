import Card from "../components/Card";
import { ILaunchDataMap, ILaunchDataMapList } from "../App";
import { motion } from "framer-motion";
const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};
const ListOfCards: React.FC<ILaunchDataMapList> = ({
  launchData,
}: ILaunchDataMapList) => {
  return (
    <motion.div
      className="mt-8 grid lg:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-3 gap-5 sm:gap-8 lg:gap-14"
      variants={cardContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {launchData?.map((card: ILaunchDataMap, index: number) => (
        <motion.div key={index} variants={cardVariants}>
          <Card {...card} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ListOfCards;
