import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const PaginationBtn = ({ refetch, setCurrentPage, totelPage, currentPage }) => {
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
        console.log("seclr", selected)
        refetch()

    }
    const paginationVariant = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.5,
            },
        },
    };


    const shownwxtBtn = currentPage !== totelPage - 1;
    const showprevuasBtn = currentPage !== 0;

    return (
        <motion.div
            variants={paginationVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-row"
        >
            <ReactPaginate
                breakLabel={<span className="mr-4">......</span>}
                nextLabel={
                    shownwxtBtn ? <span className="w-10 flex items-center justify-center h-10 rounded-md">
                        <BsChevronRight />
                    </span> : null
                }
                onPageChange={handlePageClick}
                pageCount={totelPage}
                previousLabel={
                    showprevuasBtn ? <span className="w-10 flex items-center justify-center h-10 rounded-md">
                        <BsChevronLeft />
                    </span> : null
                }
                pageClassName="block border border-secondary w-10 h-10 hover:bg-secondary/50 flex items-center justify-center"
                activeClassName="bg-secondary"
                containerClassName="flex items-center justify-center mt-10"
            />
        </motion.div>
    );
};

export default PaginationBtn;
