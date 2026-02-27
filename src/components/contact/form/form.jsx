import React from 'react'

import { motion } from 'framer-motion'

import { AiOutlineSend } from 'react-icons/ai'
import { LuSend } from 'react-icons/lu'
import styles from './form.module.css'

const formInfo = [
    {input: true, type: "text", name: "name", id: "name", label: "Nome", for: "name"},
    {input: true, type: "email", name: "email", id: "email", label: "Email", for: "email"},
    {input: true, type: "text", name: "subject", id: "subject", label: "Assunto", for: "subject"},
    {input: false, name: "content", id: "content", label: "Conteúdo", for: "content"}
]

export default function Form() {
    return (
        <motion.form
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: 1, duration: 1}}
            action="">

            {formInfo.map((info, index) => (
                <div key={index} className={styles.formInput}>
                    {info.input
                        ?
                        <React.Fragment key={index}>
                            <input placeholder='' type={info.type} name={info.name} id={info.id}  />
                            <label htmlFor={info.for}>{info.label}</label>
                        </React.Fragment>

                        :
                        <React.Fragment key={index}>
                            <textarea placeholder='' name="" id={styles.content}></textarea>
                            <label htmlFor={info.for}>{info.label}</label>
                        </React.Fragment>
                    }
                </div>
            ))}

            <div className={styles.formInput}>
                <button id={styles.formSubmit} type='submit'> <LuSend className={styles.formIcon} /> Enviar Menssagem</button>
            </div>

        </motion.form>
    )
};
