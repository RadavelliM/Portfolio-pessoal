import React from 'react'

import { FiArrowDown } from 'react-icons/fi'
import { motion } from "framer-motion";

import './arrow.css'

export default function ArrowDown() {
    return (
        <motion.div className='arrow'
            animate={{ y: [0, -15, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            >
            <FiArrowDown onClick={() => window.location.href = "#techStack"} />
        </motion.div>
    )
};
